const process = require('process');

process.stdin.setEncoding('utf8');

console.log("Input n value: ");

process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        var n = chunk

    if (n <2){
        return console.log("n value must be greater than 1")
    } else { 
    var wall = "@";
    var path = " ";
    function pola1(i,x,S){    
        if (x%4 == 0){
            result = "@ "+wall.repeat(S-2)
        } else if (x%4 == 2){
            result = wall.repeat(S-2) + " @"
        } else {
            result = wall + path.repeat(S-2) + "@"
        }
        return result
    }

    var S = 4*n -1
    for (i=0;i<S;i++){
        console.log(pola1(i,i+4,S))
    }
    }
    }
});