let arr=[1,5,9,7,8]
// console.log(arr.length)
// console.log(arr.toString()) 
// console.log(arr.join(" and "))
// arr.pop()
// arr.push(100)
// arr.push("Marcus")
// arr.unshift(78)
// console.log(arr)
// arr.splice(0,3,222,555,69)
// console.log(arr)
// let newarr=[]
// for (let i = 0; i < arr.length; i++) {
//     newarr.push(arr[i])
// }
let newarr=arr.map((e) =>{
    return e
})
console.log(newarr.filter( (e)=>{
    if(e>7){return true}
    return false
} ))

let arr2=[1,2,3,4,5,6]
console.log(arr2.reduce((a,b)=>{return a*b}))
