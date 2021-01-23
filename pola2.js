var n = 4

if (n <2){
    return console.log("n value must be greater than 1")
} else { 
    var wall = "@";
    var path = " ";
    var S = 4*n -1
    var middle = parseInt(S/2)
    for (i=0;i<S;i++){
        if (i < middle-1){
            console.log(upper(i,S))
        }else if ((i==middle-1) || (i == middle)){
            console.log(middler(middle))
        }else {
            console.log(lower(i,S))
        }
    }
}

function upper(i,S){
    result = "@ "
    if (i == 0){
        result += "@".repeat(S-2)
    }else if ((i%2 == 0) && (i!=0)){
        result += "@ ".repeat(i/2)
        len = result.length
        result += "@".repeat(S-(len)-i)
        len = result.length
        result += " @".repeat((S-len)/2)
    }else {
        result += "@ ".repeat((i/2)+1)
        len = result.length
        result += " ".repeat(S-len-(i+1))
        len = result.length
        result += " @".repeat((S-len)/2)
    }
    return result
}
function middler(middle){
    return "@ ".repeat(middle+1)
}
function lower(i,S){
    result = "@ "
    if (i == S-1){
        result = "@".repeat(S)
    }else if (i%2 == 0){
        result = "@ ".repeat(((S-i)/2))
        len = result.length
        result += "@".repeat((S-(len*2)))
        result += " @".repeat((S-i)/2)
    }else {
        result = "@ ".repeat(((S-i)/2))
        len = result.length
        result += " ".repeat((S-(len*2)))
        result += " @".repeat((S-i)/2)
    }
    return result
}