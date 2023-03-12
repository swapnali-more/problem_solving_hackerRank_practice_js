function diagonalDifference(arr) {
    // Write your code here
    let firstDiago = 0, secondDiago = 0, diffDiago = 0;
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i == j) {
                firstDiago += arr[i][j]
            }
            
            if((i + j) === (arr.length - 1)) {
                secondDiago += arr[i][j]
            }
        }
    }
    diffDiago = Math.abs(firstDiago - secondDiago)
    return diffDiago
}