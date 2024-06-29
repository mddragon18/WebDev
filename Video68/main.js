let boxes=document.getElementsByClassName("box")

// boxes[2].style.backgroundColor="orange"
// document.getElementById("red").style.backgroundColor="red"
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="orange"    
})
