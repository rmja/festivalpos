using FestivalPOS.Hubs;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Azure.Storage;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using System.Text.Json;
using System.Text.Json.Serialization;

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

            services.AddMvc()
                .AddJsonOptions(options => options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase)));

            services.AddEntityFrameworkSqlServer()
                .AddDbContext<PosContext>();

            services.AddSignalR()
                .AddJsonProtocol(options => options.PayloadSerializerOptions.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase)));
            services.AddMediatR(typeof(Startup).Assembly);

            services.AddSingleton(sp =>
            {
                var options = sp.GetRequiredService<IOptions<PosOptions>>().Value;
                return CloudStorageAccount.Parse(options.StorageConnectionString);
            });

            services.AddScoped<PrintDispatcher>()
                .AddSingleton<PrintQueue>()
                .AddSingleton<ReceiptPrintGenerator>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceScopeFactory serviceScopeFactory)
        {
            using (var scope = serviceScopeFactory.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<PosContext>();
                db.Database.Migrate();
            }

            if (env.IsDevelopment())
            {
                app
                    .UseDeveloperExceptionPage()
                    .UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions { HotModuleReplacement = true });
            }
            else
            {
                app.UseHsts();
            }

            app
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
