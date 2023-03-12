function staircase(n) {
    // Write your code here
    let res = '';
    for(let i = 1; i <= n; i++) {
        for(let j = n - 1; j >= i; j--) {
            res += ' '
        }
        for(let k = 1; k <= i; k++) {
            res += '#'
        }
        res += '\n'
    }
    
    console.log(res)
}