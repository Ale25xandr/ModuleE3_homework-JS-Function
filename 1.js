let arr = [1,2,4,5,3,7,8,0, 'o', 'fghgvjbkn']
let res_even = 0
let res_odd = 0
let res_null = 0

for (let i = 0; i<arr.length; i++) {
    if (arr[i] === 0 || typeof(arr[i]) != 'number') {
        console.log(arr[i])
        res_null += 1
    } else {
        if (arr[i]%2 === 0)
        {
        res_even += 1
    } else {
        res_odd += 1
    }
}
}

console.log(res_null, res_even, res_odd)