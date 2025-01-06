namespace VibrantApi;

public interface IVibrantApiClientFactory
{
    IVibrantApiClient Create(VibrantApiOptions options);
}
