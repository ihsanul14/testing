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
        result = wall
        for (j=1;j<S;j++){
            if (x%4 == 0){
                if (j==1){
                    result = result + path;
                }
                else {
                    result = result + wall;
                }
            } else if (x%4 == 2){
                if (j==S-2){
                    result = result + path;
                }
                else{
                    result= result +wall;
                }
            } else {
                if (j==S-1){
                    result = result + wall;
                }
                else {
                    result= result + path;
                }
            }
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