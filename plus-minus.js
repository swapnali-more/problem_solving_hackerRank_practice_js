function plusMinus(arr) {
    // Write your code here
    let positive = 0, negative = 0, zero = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive += 1;
        } else if(arr[i] < 0) {
            negative += 1;
        } else if(arr[i] === 0) {
            zero += 1;
        }
    }
    
    let posDec, negDec, zeroDec;
    posDec = (positive / arr.length).toFixed(6)
    negDec = (negative / arr.length).toFixed(6)
    zeroDec = (zero / arr.length).toFixed(6)
    
    console.log(posDec) ;
    console.log(negDec) ;
    console.log(zeroDec) ;

}