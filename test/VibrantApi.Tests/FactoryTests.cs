using Microsoft.Extensions.DependencyInjection;
using VibrantApi.Extensions;

namespace VibrantApi.Tests;

public class FactoryTests
{
    [Fact]
    public async Task CanCreateClient()
    {
        // Given
        var services = new ServiceCollection().AddVibrantApi().BuildServiceProvider();
        var factory = services.GetRequiredService<IVibrantApiClientFactory>();

        // When
        var client = factory.Create(new() { Sandbox = true, ApiKey = TestSecrets.SandboxApiKey });

        // Then
        var terminals = await client.Terminals.GetAllAsync().ToListAsync();
        Assert.Equal(3, terminals.Count);
    }
}
