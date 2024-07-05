fetchdata()
async function fetchdata(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok)
        {
            throw new Error("Could not fetch that")
        }
        const data = await response.json()
        const pokemonImg=data.sprites.front_default
        const img=document.getElementById("pokemonImg")
        img.src=pokemonImg
        img.style.display="block"
   }
    catch(err){
        console.error(err)
    }
}
