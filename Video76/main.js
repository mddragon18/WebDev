// // async function getData() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve(200)
// //         }, 2000)
// //     })

// // }
// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data=await x.json()
//     //    .then(response => response.json())
//     //    .then(json => console.log(json))
//     console.log(data)
//     return 200
// }
// async function main() {
//     console.log('Loading Modules');
//     console.log('Do Something');
//     console.log('Load Data');

//     let data = await getData()

//     console.log(data)

//     console.log('Process data');
// }
// main()


//Async
// async function fetch() {
//     // let data = {
//     //     Name: "Marcus",
//     //     Age: 45,
//     //     Occupation: "Emperor"
    
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => resolve(data), 2000)
//        let x= fetch('https://jsonplaceholder.typicode.com/todos/1')
       
//     })

// }
// async function main() {
//    let x= await fetch()
//     console.log("Done")
// }

// main()

function walk()
{
    return new Promise((resolve,reject)=>{
        const walkdone=true
        if(walkdone)
        {
            setTimeout(()=>{
            resolve("You went for a walk")
        })}
        else{
            reject("Nope,You lazy bugger")
        }
    })
}
function dishes()
{
    return new Promise((resolve,reject)=>{
        const dishesdone=true
        if(dishesdone)
        {
            setTimeout(()=>{
            resolve("You did the dishes")
        })}
        else{
            reject("Nope,Are you afraid of water??SMH")
        }
    })
}
function trash()
{
    return new Promise((resolve,reject)=>{
        const trashdone=false
        if(trashdone)
        {
            setTimeout(()=>{
            resolve("You took out the trash")
        })}
        else{
            reject("Nope,You are trash")
        }
    })
}
async function dochores(){
    try
    {console.log(await walk());
    console.log(await trash());
    console.log(await dishes());//I want this to run this aswell help me chatgpt
}
    catch(e)
    {
        console.log(e);
        
    }
    
}
dochores()
