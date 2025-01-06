using System.Text.Json;
using System.Text.Json.Serialization;
using Azure.Storage.Blobs;
using FestivalPOS.Converters;
using FestivalPOS.Hubs;
using FestivalPOS.Printing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace FestivalPOS
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<PosOptions>(Configuration);

            var fakeServiceProvider = new ServiceCollection();
            fakeServiceProvider.AddLogging().AddMvc().AddNewtonsoftJson();

            var fakeMvcOptions = fakeServiceProvider
                .BuildServiceProvider()
                .GetRequiredService<IOptions<MvcOptions>>()
                .Value;

            services
                .AddMvc(options =>
                {
                    var jsonPatchInputFormatter = fakeMvcOptions
                        .InputFormatters.OfType<Microsoft.AspNetCore.Mvc.Formatters.NewtonsoftJsonPatchInputFormatter>()
                        .Single();
                    options.InputFormatters.Insert(0, jsonPatchInputFormatter);
                })
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
