using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HttpClientFactoryDemo
{
    public class PublicApiEntriesQueryResponse
    {
        public long Count { get; set; }
        public ICollection<EntryApiModel> Entries { get; set; }
    }
}
