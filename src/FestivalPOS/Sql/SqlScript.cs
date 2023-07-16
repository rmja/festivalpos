using System.IO;
using System.Threading.Tasks;

namespace FestivalPOS.Sql
{
    public static class SqlScript
    {
        public static async Task<string> GetAsync(string filename)
        {
            using (
                var stream = typeof(SqlScript).Assembly.GetManifestResourceStream(
                    typeof(SqlScript),
                    filename
                )
            )
            using (var reader = new StreamReader(stream))
            {
                return await reader.ReadToEndAsync();
            }
        }
    }
}
