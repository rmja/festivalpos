using KajfestPOS.Controllers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Converters;

namespace KajfestPOS
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
                .AddJsonOptions(options => options.SerializerSettings.Converters.Add(new StringEnumConverter(camelCaseText: true)))
                .AddRazorPagesOptions(options => options.Conventions.AddPageRoute("/Index", "{*url:regex(^(?!api).*$)}")); // https://github.com/aspnet/JavaScriptServices/issues/1354;

            services.AddEntityFrameworkSqlServer().AddDbContext<PosContext>();

            services.AddSignalR();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceScopeFactory serviceScopeFactory)
        {
            using (var scope = serviceScopeFactory.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<PosContext>();
                db.Database.Migrate();
            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            if (env.IsDevelopment())
            {
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions { HotModuleReplacement = true });
            }

            app
                .UseStaticFiles()
                .UseSignalR(builder => builder.MapHub<AlarmsHub>("/alarms"))
                .UseMvc();
        }
    }
}
