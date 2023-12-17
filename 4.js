const range = function(a,b){
    let c = a
    let timeId = setInterval(function(){
        console.log(c++)
        if (c>b){
            clearInterval(timeId)
        }
    }, 1000)
}

range(2,15)