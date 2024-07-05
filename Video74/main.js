let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="You are an <b>idiot</b>"
})
// btn.addEventListener("mousedown",()=>{
//     document.querySelector(".box").innerHTML="You are an <b>idiot</b>"
// })

btn.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="You are a bigger <b>idiot</b>"
})
btn.addEventListener("mouseover",()=>{
    document.querySelector(".box").innerHTML="Fr nigga???"
})
document.addEventListener("keydown",(e)=>{console.log(e.key,e.keyCode)})
