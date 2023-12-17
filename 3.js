function example(a){
    return function(b){
        return a+b
    }
}


const sum_1 = example(2)

const sum_2 = sum_1(5)

console.log(sum_2)