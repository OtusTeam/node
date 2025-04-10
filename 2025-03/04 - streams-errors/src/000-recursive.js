const { setImmediate } = require('timers/promises');

const bigArray = Array.from({ length: 10000000 }, (_, i) => i + 1);

let timerCount = 0;

const timer = setTimeout(() => {
    console.log('timerCount', ++timerCount);
    timer.refresh();
})

;(async() => {
    console.time('sum');
    const res = await sumFlat(bigArray);
    console.timeEnd('sum');

    console.log(res);
})();

function sumRecursive(arr, index = 0) {
    if (index >= arr.length) return 0
    return arr[index] + sumRecursive(arr, index + 1)
}

async function sumFlat(arr, index = 0) {
    let total = 0;
    const chunkSize = 1000;

    for (let i = index; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);

        for (const num of chunk) {
          total += num;
        }

        await setImmediate();
    }
    
    return total;
}