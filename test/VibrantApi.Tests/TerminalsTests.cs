using Microsoft.Extensions.DependencyInjection;
using VibrantApi.Extensions;

namespace VibrantApi.Tests;

public class TerminalsTests
{
    private readonly IVibrantApiClient _client;
    private const string TerminalId = "30320391"; // Terminal 1 in VB sandbox

    public TerminalsTests()
    {
        var services = new ServiceCollection()
            .AddVibrantApi(options =>
            {
                options.Sandbox = true;
                options.ApiKey = TestSecrets.SandboxApiKey;
            })
            .BuildServiceProvider();
        _client = services.GetRequiredService<IVibrantApiClient>();
    }

    [Fact]
    public async Task CanGetAll()
    {
        // Given

        // When
        var terminals = await _client.Terminals.GetAllAsync().ToListAsync();

        // Then
        Assert.Equal(3, terminals.Count);
    }

    [Fact]
    public async Task CanGetById()
    {
        // Given

        // When
        var terminal = await _client.Terminals.GetByIdAsync(TerminalId);

        // Then
        Assert.Equal("Terminal 1", terminal.Name);
    }

    [Fact]
    public async Task CanProcessPaymentIntent()
    {
        // Given

        // When
        var ppi = await _client.Terminals.ProcessPaymentIntentAsync(
            TerminalId,
            new()
            {
                PaymentIntent = new() { Amount = 1234, Description = "Testkøb" }
            }
        );

        // Then
        Assert.Equal(TerminalId, ppi.TerminalId);
        Assert.NotNull(ppi.ObjectIdToProcess);

        var pi = await _client.PaymentIntents.GetByIdAsync(ppi.ObjectIdToProcess);
        Assert.Equal(1234, pi.Amount);
        Assert.Equal("requires_payment_method", pi.Status);
        Assert.Null(pi.CancelationReason);
    }
}
