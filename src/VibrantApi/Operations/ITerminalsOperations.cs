using System.Runtime.CompilerServices;
using Refit;
using VibrantApi.Models;

namespace VibrantApi.Operations;

public interface ITerminalsOperations
{
    // https://pos.api.vibrant.app/docs#/terminals/TerminalController_GetTerminals
    [Get("/pos/v1/terminals")]
    internal Task<PagedList<Terminal>> GetAllAsync(
        int limit,
        [AliasAs("starting_after")] string? startingAfter,
        CancellationToken cancellationToken
    );

    // https://pos.api.vibrant.app/docs#/terminals/TerminalController_getTerminal
    [Get("/pos/v1/terminals/{terminalId}")]
    Task<Terminal> GetByIdAsync(string terminalId, CancellationToken cancellationToken = default);

    // https://pos.api.vibrant.app/docs#/terminals/TerminalController_processPaymentIntent
    [Post("/pos/v1/terminals/{terminalId}/process_payment_intent")]
    Task<ProcessPaymentIntent> ProcessPaymentIntentAsync(
        string terminalId,
        ProcessPaymentIntentInit paymentIntent,
        CancellationToken cancellationToken = default
    );

    async IAsyncEnumerable<Terminal> GetAllAsync(
        [EnumeratorCancellation] CancellationToken cancellationToken = default
    )
    {
        const int DefaultLimit = 100;

        var page = await GetAllAsync(DefaultLimit, null, cancellationToken);

        while (!cancellationToken.IsCancellationRequested)
        {
            foreach (var item in page.Data)
            {
                yield return item;
            }

            if (!page.HasMore)
            {
                break;
            }

            page = await GetAllAsync(DefaultLimit, page.Data.Last().Id, cancellationToken);
        }
    }
}
