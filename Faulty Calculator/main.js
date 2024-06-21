console.log("Your Choices are- +,-,*,/")
let n1,n2
let choice='*'
n1=10
n2=40
    let a=Math.random()
    if(a<=0.1)
        {
            if(choice === '+')
                console.log(n1-n2)
            if(choice === '-')
                console.log(n1/n2)
            if(choice === '*')
                console.log(n1+n2)
            if(choice === '/')
                console.log(n1/n2)
        }
    else
    {
        if(choice=== '+')
            console.log(n1+n2)
        if(choice=== '-')
            console.log(n1-n2)
        if(choice=== '*')
            console.log(n1*n2)
        if(choice=== '/')
            console.log(n1/n2)
        
    }
    

