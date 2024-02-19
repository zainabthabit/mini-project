for(let i =1; i<=5; i++){
    let userInput =prompt("enter your choise: scissors,rock, paper")
const computerChoise = ["scissors", "rock", "paper"];

const random_Index = Math.floor(Math.random() * computerChoise.length);
const random =computerChoise[random_Index] 
console.log(random)

if(userInput==="scissors" ){
    if(random === "paper"){
        console.log("you won")
    }
    else if(random ==="rock"){
        console.log("I won")

    } else if(random ==="scissors"){
        console.log("we are equal")
    }

} else if(userInput==="paper" ){
    if(random === "paper"){
        console.log("we are equal")
    }
    else if(random ==="rock"){
        console.log("you won")

    } else if(random ==="scissors"){
        console.log("I won")

    }

}else  if(userInput==="rock" ){
    if(random === "rock"){
        console.log("we are equal")
    }
    else if(random ==="paper"){
        console.log("I won")

    } else if(random ==="scissors"){
        console.log("you won")

    }
}
}
