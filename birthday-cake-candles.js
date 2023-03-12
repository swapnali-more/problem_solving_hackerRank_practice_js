function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    let count = 0;
    for(let i = 0; i < candles.length; i++) {
        //console.log(i, candles[i])
        if(candles[i] > max) {
            max = candles[i];
            count = 1;
        } else if(max === candles[i]) {
            count++;
        }
    }
    return count;
}