let arr=[]
let num=5
var fact
for (let i = 0; i <num; i++) {
    arr.push(i+1)
}
fact=arr.reduce((a,b)=>{return a*b })
console.log(fact)
