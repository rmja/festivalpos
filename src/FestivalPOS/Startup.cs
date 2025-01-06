using System.Text.Json;
using System.Text.Json.Serialization;
using Azure.Storage.Blobs;
using FestivalPOS.Converters;
using FestivalPOS.Hubs;
using FestivalPOS.Printing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace FestivalPOS
{
    public class Startup(IConfiguration configuration)
    {
        public IConfiguration Configuration { get; } = configuration;

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<PosOptions>(Configuration);

            services
                .AddMvc()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.Converters.Add(
                        new JsonStringEnumConverter(JsonNamingPolicy.CamelCase)
                    );
                    options.JsonSerializerOptions.Converters.Add(new DecimalConverter());
                });

            services
                .AddEntityFrameworkSqlServer()
                .AddDbContext<PosContext>(
                    contextLifetime: ServiceLifetime.Transient,
                    optionsLifetime: ServiceLifetime.Scoped
                );

            services.AddHttpClient();

            services
                .AddSignalR()
                .AddJsonProtocol(options =>
                {
                    options.PayloadSerializerOptions.Converters.Add(
                        new JsonStringEnumConverter(JsonNamingPolicy.CamelCase)
                    );
                    options.PayloadSerializerOptions.Converters.Add(new DecimalConverter());
                });

            services.AddMediatR(config =>
                config.RegisterServicesFromAssembly(typeof(Startup).Assembly)
            );

            services.AddVibrantApi();

            services.AddSingleton(sp =>
            {
                var options = sp.GetRequiredService<IOptions<PosOptions>>().Value;
                return new BlobServiceClient(options.StorageConnectionString);
            });

            services
                .AddScoped<PrintDispatcher>()
                .AddSingleton<PrintQueue>()
                .AddSingleton<ReceiptPrintGenerator>();
        }

        public void Configure(IApplicationBuilder app, IServiceScopeFactory serviceScopeFactory)
        {
            using (var scope = serviceScopeFactory.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<PosContext>();
                db.Database.Migrate();
            }

            app.UseDeveloperExceptionPage()
                .UseHttpsRedirection()
                .UseStaticFiles()
                .UseRouting()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapHub<AlarmsHub>("/Alarms");
                    endpoints.MapHub<PrintingHub>("/Printing");
                    endpoints.MapHub<ServingHub>("/Serving");
                    endpoints.MapControllers();
                    endpoints.MapRazorPages();
                });
        }
    }
}
