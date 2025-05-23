const autocannon = require('autocannon')

startBench()

// autocannon

function startBench () {
  const instance = autocannon({
    url: 'http://localhost:4000',
    connections: 100,
    duration: 15,
    debug: true,
    requests: [
      {
        method: 'GET',
        path: '/fast'
      }
    ]
  }, finishedBench)

  autocannon.track(instance)

  process.once('SIGINT', () => {
    instance.stop()
  })
}

function finishedBench (err, res) {
  // console.log('finished bench', err, res)
}


// 104k requests in 15.04s, 29.2 MB read 14
// 211k requests in 15.07s, 59.5 MB read 6.62 ms

/*
Running 15s test @ http://localhost:4000
100 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max    │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼────────┤
│ Latency │ 4 ms │ 4 ms │ 8 ms  │ 9 ms │ 4.78 ms │ 3.88 ms │ 433 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 14791   │ 14791   │ 19455   │ 19935   │ 19042.41 │ 1248.44 │ 14791   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 4.17 MB │ 4.17 MB │ 5.48 MB │ 5.62 MB │ 5.37 MB  │ 352 kB  │ 4.17 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 15

286k requests in 15.02s, 80.5 MB read
*/


/*
Running 15s test @ http://localhost:4000
100 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 1 ms │ 2 ms │ 6 ms  │ 8 ms │ 2.34 ms │ 1.68 ms │ 83 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 19455   │ 19455   │ 38015   │ 41023   │ 35132.81 │ 6767.9  │ 19444   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 5.48 MB │ 5.48 MB │ 10.7 MB │ 11.6 MB │ 9.91 MB  │ 1.91 MB │ 5.48 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 15

527k requests in 15.04s, 149 MB read

*/