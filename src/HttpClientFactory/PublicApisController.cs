using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace HttpClientFactoryDemo
{
    [ApiController]
    [Route("api/[controller]")]
    public class PublicApisController
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public PublicApisController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<ActionResult<PublicApiEntriesQueryResponse>> Get()
        {
            var client = _httpClientFactory.CreateClient();
            var responseMessage = await client.GetAsync("https://api.publicapis.org/entries");
            var response = await responseMessage.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<PublicApiEntriesQueryResponse>(response);            
        }
    }
}