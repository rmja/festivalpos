using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PagerController;

var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices((context, services) => services
        .AddHostedService<HubListener>()
        .AddSingleton<PagerService>()
        .Configure<ControllerOptions>(context.Configuration))
    .Build();

host.Run();