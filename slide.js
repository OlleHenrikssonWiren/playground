var cardCount = 0;

let card = document.querySelectorAll(".slideCard")
cardCount = card.length;
let cardValue = 0;
let buttonBox = document.querySelector(".slideButtons");
let button = document.createElement("div");
let activeButton = null;
let activeCard = document.querySelector(".slideCardActive");


console.log(cardCount)

function loadButtons() {
    let buttonInterval = setInterval(() => {
        let button = document.createElement("div");

        buttonBox.appendChild(button);
        button.classList.add("button")
        console.log(cardValue, button)
        cardValue += 1
        if (cardValue === cardCount) {
            clearInterval(buttonInterval)
        }
    }, 100);
}
function calcCenterCard() {
    
}

let buttonCount = document.getElementsByClassName("button")

setTimeout(() => {
    
for (let i = 0; i < buttonCount.length; i++) { 
function highlightCard() {
    console.log(buttonCount[2])
    switch(buttonCount[i]) {
        case buttonCount[0]:
            activeCard.querySelector("div").style.backgroundImage = "url(../imgs/slideshow/Singed.jpg)"
            activeCard.querySelector("p").innerHTML = "This is singed Whirl MIX";
            activeButton = 0
            console.log("what")
        break;
        case buttonCount[1]:
            activeCard.querySelector("div").style.backgroundImage = "url(../imgs/slideshow/Soraka.jpg)"
            activeCard.querySelector("p").innerHTML = "Banana :D";
            activeButton = 1
        break;
        case buttonCount[2]:
            activeCard.querySelector("div").style.backgroundImage = "url(../imgs/slideshow/TwistedFate.jpg)"
            activeCard.querySelector("p").innerHTML = "cards";
            activeButton = 2
        break;
        case buttonCount[3]:
            activeCard.querySelector("div").style.backgroundImage = "url(../imgs/slideshow/Mordekaiser.jpg)"
            activeCard.querySelector("p").innerHTML = "HUEHUEHUE MORDEKAISER HUE HUE HUE";
            activeButton = 3
        break;
       
    } 
    highlightButton();
}
buttonCount[i].addEventListener("click", highlightCard)
}
}, 1000);

function highlightButton() {
    for (let i = 0; i < buttonCount.length; i++) {
        buttonCount[i].classList.remove("btnActive")
    }
        buttonCount[activeButton].classList.add("btnActive")
}

/* setTimeout(() => {  
for (let i = 0; i < buttonCount.length; i++) { 
function highlightButton() {
    console.log("toggle shir")
    
    buttonCount[i].classList.add("activeBtn") 
}
    buttonCount[i].addEventListener("click", highlightButton)
}
}, 1000);*/
loadButtons()