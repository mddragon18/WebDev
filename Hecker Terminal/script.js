let commands=["Initializing Hacking",
              "Reading your files",
              "Reading your passwords",
              "Sending Files to server",
              "Exiting"
]
async function main()
{
    setInterval(()=>{
        let last=document.body.lastElementChild
        if(last.textContent.endsWith("...")){
            last.textContent=last.textContent.slice(0,last.textContent.length-3)
        }
        else{
            last.textContent+="."
        }
    },700)


const randomDelay=()=>{
    let a=1+Math.random()*6
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },a*1000)
    })
}
async function addItem(item)
{
    await randomDelay()
    const div=document.createElement("div")
    div.textContent=item
    document.body.append(div)
}

for (const item of commands) {
    await addItem(item)
}}
main()
