let prefix
if(Math.random<0.33)
    {
        prefix="Crazy"
    }
else if(Math.random()>0.33 && Math.random()<0.66)
    {
        prefix="Amazing"
    }
else
    {
        prefix="Fire"
    }
let shopname
if(Math.random<0.33)
    {
        shopname="Engine"
    }
else if(Math.random()>0.33 && Math.random()<0.66)
    {
        shopname="Foods"
    }
else 
    {
        shopname="Garments"
    }
let postfix
if(Math.random<0.33)
    {
        postfix="Bros"
    }
else if(Math.random()>0.33 && Math.random()<0.66)
    {
        postfix="Limited"
    }
else 
    {
        postfix="Hub"
    }
console.log(`${prefix} ${shopname} ${postfix}`)
