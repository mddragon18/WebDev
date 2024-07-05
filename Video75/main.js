let prom1=new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.5){
        setTimeout(()=>{
            console.log("Prom1 done")
            resolve("Success 1")
        },a*10000)
    }
    else
    {
        reject("Failure 1")
    }
})
let prom2=new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.4){
        setTimeout(()=>{
            console.log("Prom2 done")
            resolve("Success 2")
        },a*10000)
    }
    else
    {
        reject("Failure 2")
    }
})
// prom1.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.error(error)
// })
// prom2.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.error(error)
// })

let p3=Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
