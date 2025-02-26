

//document.onclick = function testEnabled() { // This is for debugging
 //   console.log(keyBtn)
//}


//Variables
let halt = null; //Pause mechanic on key regs
let enabled1 = halt; // Toggle key regs for player 1
let enabled2 = halt; // Toggle Key regs for player 2 
var selectionAudio1 = new Audio("../audio/rps/player1Select.mp3");
var selectionAudio2 = new Audio("../audio/rps/player2Select.wav");
var countAudio = new Audio("../audio/rps/countdown.ogg");
var countAudio2 = new Audio("../audio/rps/countdown.ogg");
var crowdAudio = new Audio("../audio/rps/crowdCheer.wav");
var drumAudio = new Audio("../audio/rps/drumBeat.wav");
var chickenScreamAudio = new Audio("../audio/rps/chickenScream.wav")
let p1Choice = "";
let p2Choice = "";
let draw = false; // this might do some
let win = 0; //    does nothing lol
let loss = 0; // 
let points1 = 0; //actual score
let points2 = 0; //actual score
let firstToMode = "";

gotPoints1 = false;
gotPoints2 = false;
currentChar1 = "";
currentChar2 = "";


//Refresh Button
document.querySelector(".resetBtn").addEventListener("click", endGame)

//Start Menu
let footer = document.querySelector(".footerRPS");
let footerBox = document.querySelector(".footerRPSBox");
let popupBox = document.querySelector(".infoPopup");
let bestOfMenu = document.querySelector(".bestOfMenu");
function setupPhaseEnd() {
    if (currentChar1 !== "" && currentChar2 !== "") {

    
    footer.classList.add("closed")
    footerBox.classList.add("closedBox")
    popupBox.style.visibility = "hidden"
    bestOfMenu.style.visibility = "hidden"
    
    setTimeout(() => {
        enabled1 = true;
        enabled2 = true;
    }, 1000);

    if(currentChar1 === "turkey" || currentChar2 === "turkey") {
        callRandomFunction(list)
    }
    camelPassive();
    

    } else {
    console.log("sr")
    }   
}

let pointsCounter1 = document.querySelector(".score1"); // Textbox for score
let pointsCounter2 = document.querySelector(".score2");

function endGame() {
    
    draw = false;
    halt = null;
    enabled1 = halt;
    enabled2 = halt;
    points1 = 0;
    points2 = 0;
    pointsCounter1.innerHTML = points1;
    pointsCounter2.innerHTML = points2;
    p1Choice = "";
    p2Choice = "";
    gotPoints1 = false;
    gotPoints2 = false;
    currentChar1 = "";
    currentChar2 = "";
    turkeyRemover();
    enforceRemover();
    firstToMode = "";
    bestOfMenu.style.visibility = "visible"
    footer.classList.remove("closed")
    footerBox.classList.remove("closedBox")

    let button2 = document.querySelectorAll(".circleBtn2")
        for (m = 0; m < button2.length; m++) {
            button2[m].classList.remove("btnOn")
    }
    let button1 = document.querySelectorAll(".circleBtn1")
    for (n = 0; n < button1.length; n++) {
        button1[n].classList.remove("btnOn")
    }
    let firstToButton = document.querySelectorAll(".bestNum")
    for (let ftBtnNum = 0; ftBtnNum < firstToButton.length; ftBtnNum++) {  
        firstToButton[ftBtnNum].classList.remove("firstToBtnOn");
        firstToButton[3].classList.add("firstToBtnOn")
    }
}

// PLAYER 1 CHARCTER CHOICE
let charBtn1 = document.querySelectorAll(".circleBtn1") 
for (let f = 0; f < charBtn1.length; f++) {
    charBtn1[f].addEventListener("click", characterSelect1);
    
function characterSelect1() { //Player 1
    let charBtn1 = f;
    let player1Model = document.querySelector(".character1")
    let button1 = document.querySelectorAll(".circleBtn1")
    

    if(currentChar1 === "") {
    switch (charBtn1) { //Kommer behövas uppdatera based on karaktär amount (player 1)
        case  0: //For player 1
    
            player1Model.src = "../imgs/chars/foxEmoji.png";
            console.log("fox player 1");
            currentChar1 = "fox";
            for (n = 0; n < button1.length; n++) {
                button1[0].classList.add("btnOn")
            }
            P1characterFox();
            setupPhaseEnd();
        break;

        case 1:
            player1Model.src = "../imgs/chars/pigEmoji.png";
            console.log("pig player 1")
            currentChar1 = "pig";
            for (n = 0; n < button1.length; n++) {
                button1[1].classList.add("btnOn")
            }
            //P1characterPig();
            setupPhaseEnd();
        break;

        case 2:
            player1Model.src = "../imgs/chars/turkeyEmoji.png"
            player1Model.backgroundPositionY = "0"
            console.log("turkey player 1")
            currentChar1 = "turkey"
            for (n = 0; n < button1.length; n++) {
                button1[2].classList.add("btnOn")
            }
            //P1characterTurkey();
            setupPhaseEnd();
        break;

        case 3:
            player1Model.src = "../imgs/chars/microbeEmoji.png"
            console.log("microbe player 1")
            currentChar1 = "microbe"
            for (n = 0; n < button1.length; n++) {
                button1[3].classList.add("btnOn")
            }
            setupPhaseEnd();
        break;

        case 4:
            player1Model.src = "../imgs/chars/camelEmoji.png"
            console.log("camel player 1")
            currentChar1 = "camel"
            for (n = 0; n < button1.length; n++) {
                button1[4].classList.add("btnOn")
            }
            setupPhaseEnd();
        break;
    }
    } else {
        console.log("already Locked")
    }
}
}

//PLAYER 2 CHARACTER CHOICE
let charBtn2 = document.querySelectorAll(".circleBtn2");

for (let h = 0; h < charBtn2.length; h++) {
    charBtn2[h].addEventListener("click", characterSelect2);

    function characterSelect2() {
        let player2Model = document.querySelector(".character2")
        let charBtn2 = h;
        let button2 = document.querySelectorAll(".circleBtn2")

        if (currentChar2 === "") { // The if function is to prevent whever you already picked
        switch (charBtn2) {
        case 0:
            player2Model.src = "../imgs/chars/foxEmoji.png"
            console.log("fox player 2")
            currentChar2 = "fox";

            
            for (m = 0; m < button2.length; m++) {
                button2[0].classList.add("btnOn")
            }
            
            setupPhaseEnd();

        break;

        case 1:
            player2Model.src = "../imgs/chars/pigEmoji.png";
            console.log("pig player 2")
            currentChar2 = "pig";

            for (m = 0; m < button2.length; m++) {
                button2[1].classList.add("btnOn")
            }
            //P2characterPig();
            setupPhaseEnd();
        break;

        case 2:
            player2Model.src = "../imgs/chars/turkeyEmoji.png"
            console.log("turkey player 2")
            currentChar2 = "turkey";

        
            for (m = 0; m < button2.length; m++) {
                button2[2].classList.add("btnOn")
            }
            //P2characterTurkey();
            setupPhaseEnd();
        break;
    
        case 3:
            player2Model.src = "../imgs/chars/microbeEmoji.png"
            console.log("microbe player 2")
            currentChar2 = "microbe"
            for (m = 0; m < button2.length; m++) {
                button2[3].classList.add("btnOn")
            }
            setupPhaseEnd();
        break;

        case 4:
            player2Model.src = "../imgs/chars/camelEmoji.png"
            console.log("camel player 2")
            currentChar2 = "camel"
            for (m = 0; m < button2.length; m++) {
                button2[4].classList.add("btnOn")
            }
            setupPhaseEnd();
        break;
    }
        
            
    } else {
        console.log("alrady Locked")
    }
    }
}


//Player "1" key regs.
document.addEventListener("keyup", (keyPress) = function player1Press(keyPress)  {
    let keyBtn = keyPress.key;

    if(enabled1 === true) {
        switch (keyBtn) {
        case "q": //Code for Q
        case true:
            console.log(keyBtn);
            SelectDone()
            playSelectAni() 
            selectionAudio1.play(); //play audio on select

            p1Choice = "rock";
            if (document.querySelector("#rock1").contains(document.querySelector(".turkeyImg")) ){
                console.log("p1 rock into turkey")
                p1Choice = "turkeyFood"
            }
        break;

        case "w": // Code for W
        case true:
            console.log(keyBtn) 
            SelectDone()
            playSelectAni() 
            selectionAudio1.play();

            p1Choice = "paper";
        break;
            
        case "e": // Code for E
        case true:
            console.log(keyBtn)
            SelectDone()
            playSelectAni() 
            selectionAudio1.play(); 

            p1Choice = "scissor";
        break;

        }
    } else { // If already selected
        switch(keyBtn) {
            case "q":        
                console.log("1 already chose")
                
            break;

            case "w":        
                console.log("1 already chose")
                
            break;

            case "e":        
                console.log("1 already chose")
                
            break;
        }
    }
        
    
    function SelectDone() {
        if (keyBtn === "q" || "w" || "e") {
        console.log("Player 1 ready " + enabled1 + " 1")
        enabled1 = false;
        }
    }
    function playSelectAni() {
        let player1items = document.getElementsByClassName("player1Item");
        let player1Backdrop = document.querySelector(".backdrop1");
        let glowBox1 = document.querySelectorAll(".glowBox1");
        let char1 = document.querySelector(".character1");
        

        for (let a = 0; a < glowBox1.length; a++) { //För att lägga till en glow effect
            glowBox1[a].classList.add("glow");
            setTimeout(function() {
            glowBox1[a].classList.remove("glow");
            }, 500)
        }


        for (let i = 0; i < player1items.length; i++) {
            console.log("animation trigger")
            player1items[i].classList.remove("selectAni");
            void player1items[i].offsetWidth; //retrigger
            player1items[i].classList.add("selectAni");
        }
        player1Backdrop.classList.add("backdropPlay");
        setTimeout(function() {
        player1Backdrop.classList.remove("backdropPlay");
        }, 400)

        //Enter the chraacters
        char1.classList.add("char1On");
        setTimeout(function() {
        char1.classList.remove("char1On");
        }, 400)
    }

});


//Player "2" key regs.
document.addEventListener("keyup", (keyPress2) =>  {
    let keyBtn2 = keyPress2.key
    //console.log(keyPress2)

    if (enabled2 === true) {
        switch (keyBtn2) {
        case "i": //Code for "i"
            console.log(keyBtn2 + "y");
            SelectDone();
            playSelectAni();
            selectionAudio2.play(); 
            
            p2Choice = "rock";
            if (document.getElementById("rock2").contains(document.querySelector(".turkeyImg2")) ) {
                console.log("p2 rock into turkey")
                p2Choice = "turkeyFood"
                console.log(p2Choice)   
                
            }
            console.log(p2Choice + " test")
        break;

        case "o":
            console.log(keyBtn2);
            SelectDone();
            playSelectAni();
            selectionAudio2.play();
            
            p2Choice = "paper";
        break;
        
        case "p":
            console.log(keyBtn2);
            SelectDone();
            playSelectAni();
            selectionAudio2.play(); 
            
            p2Choice = "scissor";
        break;
        }
    } else  {
        switch(keyBtn2) {
        case "i":        
            console.log("2 already chose")
            
        break;

        case "o":        
            console.log("2 already chose")
            
        break;

        case "p":        
            console.log("2 already chose")
            
        break;
        }
    }

    function SelectDone() {
        if (keyBtn2 === "i" || "o" || "p") {
        console.log("Player 2 ready " + enabled2 + " 2")
        enabled2 = false;
        }
    }

    function playSelectAni() {
        let player2items = document.getElementsByClassName("player2Item");
        let player2Backdrop = document.querySelector(".backdrop2");
        let glowBox2 = document.querySelectorAll(".glowBox2");
        let char2 = document.querySelector(".character2");

        for (let a = 0; a < glowBox2.length; a++) { //För att lägga till en glow effect
            glowBox2[a].classList.add("glow");
            setTimeout(function() {
            glowBox2[a].classList.remove("glow");
            }, 500)
        }
            

        for (let i = 0; i < player2items.length; i++) { //För animation shake och backdrop
            console.log("animation trigger")
            

            player2items[i].classList.remove("selectAni");
            void player2items[i].offsetWidth; //retrigger
            player2items[i].classList.add("selectAni");
        }
        player2Backdrop.classList.add("backdropPlay2");
        setTimeout(function() {
        player2Backdrop.classList.remove("backdropPlay2");
        }, 400)

        char2.classList.add("char2On");
        setTimeout(function() {
        char2.classList.remove("char2On");
        }, 400)
    }
});
document.onclick = function enableChecker() {
// Checker for debug
if (enabled1 === false && enabled2 === false) {
    console.log("enabled = false")

    } else {
        console.log("sitl wa" + enabled1 + enabled2);
    }
}
    document.addEventListener("keyup", checkCountdown);

function checkCountdown() { // To check if countdown should begin
    if(enabled1 === false && enabled2 === false) {
        console.log("3. 2 . 1")
        startCountdown();
        enabled1 = halt;
        enabled2 = halt;
    } else {
        console.log("oopsie")
    }
}

function startCountdown() {
    let three = document.querySelector(".three");
    let two = document.querySelector(".two");
    let one = document.querySelector(".one");
    let background1 = document.querySelector(".backdrop1");
    let background2 = document.querySelector(".backdrop2");

    let char1 = document.querySelector(".character1");
    let char2 = document.querySelector(".character2");


    setTimeout(() => {
        //three.classList.add("timerOn")
        drumAudio.play()
    }, 1000);
    setTimeout(() => {
        //three.classList.remove("timerOn")
        background1.classList.add("backdropCount1"); // Animation for player 1 backdrop
        background2.classList.add("backdropCount2");
        char1.style.left = "-10vw"
        char1.style.bottom = "-10vh"
        char2.style.right = "-8vw"
        char2.style.bottom = "-10vh"


    }, 1500);
    setTimeout(() => {
        //two.classList.add("timerOn")
        //Same audio, they just cant stack so i need to variables for same audio sample
    }, 2000);
    setTimeout(() => {

    }, 3000);
    setTimeout(() => {
        //one.classList.remove("timerOn")
        console.log(p1Choice + p2Choice)
    }, 2500);
    setTimeout(() =>{
        selectWinner();
    }, 3000) 
}

//What to do when x character is picked



 //what do to after both have chosen option
function selectWinner() {
    let player1Item = document.querySelectorAll(".player1Item");
    let glowBox1 = document.querySelectorAll(".glowBox1");

    let glowBox2 = document.querySelectorAll(".glowBox2");
    let player2Item = document.querySelectorAll(".player2Item")

    let clap1 = document.querySelector(".clap1");
    let clap2 = document.querySelector(".clap2");
    
    setTimeout(() => { // Prevent players from spaming options // this timout is to delay the resetting process after distributed points
        enabled1 = true;
        enabled2 = true;
        turkeyRemover();
        enforceRemover();
        firstTo();
        console.log("first to triggered")
        if(currentChar1 === "turkey" || currentChar2 === "turkey") { //Reload RNG system after a round
            if (firstToMode === "3" || firstToMode === "5" || firstToMode === "10") {
                switch (firstToMode) {
                    case "3":
                        if (points1 === 3 || points2 === 3) {
                            return;
                        } else {
                            callRandomFunction(list)
                        }
                    break;

                    case "5":
                        if (points1 === 5 || points2 === 5) {
                            return;
                        } else {
                            callRandomFunction(list)
                        }
                    break;

                    case "10":
                        if (points1 === 10 || points2 === 10) {
                            return;
                        } 
                    break;
                }
            } else {
                callRandomFunction(list)
            }
        } 
    camelPassive();
    }, 4000);
    setTimeout(() => {
        gotPoints1 = false;
        gotPoints2 = false;
    }, 8000);

    console.log("selecting winner " + p1Choice)
for (let a = 0; a < glowBox1.length; a++) {
    console.log(p1Choice)
    switch (p1Choice) {
        case "rock":
            console.log("rock glow")
            glowBox1[0].classList.add("glow");
        break;
        
        case "paper":
            glowBox1[1].classList.add("glow");
        break;
        
        case "scissor":
            glowBox1[2].classList.add("glow");
        break;

        case "turkeyFood":
            glowBox1[0].classList.add("glow");
        break;
        }
    }

    for (let b = 0; b < glowBox2.length; b++) {
        switch (p2Choice) {
            case "rock":
                glowBox2[0].classList.add("glow");
                console.log("player 2 rock")
            break;

            case "paper":
                glowBox2[1].classList.add("glow");
            break;

            case "scissor":
                glowBox2[2].classList.add("glow");
            
            break;

            case "turkeyFood": 
                glowBox2[0].classList.add("glow");
                console.log("player 2 turkey")
            break;
        }
    }


    //Point Handout System
setTimeout(() => {
characterPig();
if (p1Choice === "rock" && p2Choice === "rock") {
    draw = true;
    glowBox1[0].classList.remove("glow");
    glowBox2[0].classList.remove("glow");
} 
if (p1Choice === "rock" && p2Choice === "paper") {
    points2 += 1;
    pointsCounter2.innerHTML = points2;
    gotPoints2 = true;

    glowBox1[0].classList.remove("glow");
    glowBox2[1].classList.remove("glow");
    clap2.classList.add("clap2On")
    setTimeout(() => {
        clap2.classList.remove("clap2On");
    }, 1000);
}
if (p1Choice === "rock" && p2Choice === "scissor") {
    points1 += 1;
    pointsCounter1.innerHTML = points1;
    gotPoints1 = true;

    glowBox1[0].classList.remove("glow");
    glowBox2[2].classList.remove("glow");
    clap1.classList.add("clap1On")
    setTimeout(() => {
        clap1.classList.remove("clap1On");
    }, 1000);
}
if(p1Choice === "paper" && p2Choice === "rock") {// 1 paper , 2 scissor 
    points1 += 1;
    pointsCounter1.innerHTML = points1;
    gotPoints1 = true;

    glowBox1[1].classList.remove("glow");
    glowBox2[0].classList.remove("glow");
    clap1.classList.add("clap1On")
    setTimeout(() => {
        clap1.classList.remove("clap1On");
    }, 1000);
}
if(p1Choice === "paper" && p2Choice === "paper") {
    draw = true;
    glowBox1[1].classList.remove("glow");
    glowBox2[1].classList.remove("glow");
}
if (p1Choice === "paper" && p2Choice === "scissor") {
    points2 += 1;
    pointsCounter2.innerHTML = points2;
    gotPoints2 = true;

    glowBox1[1].classList.remove("glow");
    glowBox2[2].classList.remove("glow");
    clap2.classList.add("clap2On")
    setTimeout(() => {
        clap2.classList.remove("clap2On");
    }, 1000);
}
if (p1Choice === "scissor" && p2Choice === "rock") {
    points2 += 1;
    pointsCounter2.innerHTML = points2;
    gotPoints2 = true;

    glowBox1[2].classList.remove("glow");
    glowBox2[0].classList.remove("glow");
    clap2.classList.add("clap2On")
    setTimeout(() => {
        clap2.classList.remove("clap2On");
    }, 1000);
}
if (p1Choice === "scissor" && p2Choice === "paper") {
    points1 += 1;
    pointsCounter1.innerHTML = points1;
    gotPoints1 = true;

    glowBox1[2].classList.remove("glow");
    glowBox2[1].classList.remove("glow");
    clap1.classList.add("clap1On")
    setTimeout(() => {
        clap1.classList.remove("clap1On");
    }, 1000);
    
}
if (p1Choice === "scissor" && p2Choice === "scissor") {
    draw = true;
    glowBox1[2].classList.remove("glow");
    glowBox2[2].classList.remove("glow");
    
}
if (currentChar1 === "camel" || currentChar2 === "camel") {
    if (currentChar1 === "camel") {
        let enforcePaper = document.querySelector(".enforcePassive1")
        if (enforcePaper.classList.contains("enforceOn")) {
            if (p1Choice === "paper" && p2Choice === "scissor") {
                console.log("ENFORCED RIGHT??")
                points2 -= 1;
                pointsCounter2.innerHTML = points2
            }
        }
    }
    if (currentChar2 === "camel") {
        let enforcePaper = document.querySelector(".enforcePassive2")
        if (enforcePaper.classList.contains("enforceOn")) {
            if (p2Choice === "paper" && p1Choice === "scissor") {
                points1 -= 1;
                pointsCounter1.innerHTML = points1;
            }
        }
    }
}

//If turkey section
if (p1Choice === "turkeyFood") {
    glowBox1[0].classList.remove("glow");
    glowBox2[0].classList.remove("glow");
    glowBox2[1].classList.remove("glow");
    glowBox2[2].classList.remove("glow");
}
if (p2Choice === "turkeyFood") {
    console.log(p2Choice + "far down")
    glowBox1[0].classList.remove("glow");
    glowBox1[1].classList.remove("glow");
    glowBox1[2].classList.remove("glow");
    glowBox2[0].classList.remove("glow");
    glowBox2[1].classList.remove("glow");
    glowBox2[2].classList.remove("glow");
    
}
if (p1Choice === "turkeyFood" && p2Choice === "turkeyFood") {
    points1 -= 1;
    points2 -= 1;
    pointsCounter1.innerHTML = points1;
    pointsCounter2.innerHTML = points2;
    glowBox1[0].classList.remove("glow");
    glowBox2[0].classList.remove("glow");
}    
if(p2Choice === "turkeyFood" && p1Choice === "rock") {
    points2 -= 1;
    pointsCounter2.innerHTML = points2

}
if(p2Choice === "turkeyFood" && p1Choice === "scissor") {
    points2 -= 1;
    pointsCounter2.innerHTML = points2
    
}
if(p2Choice === "turkeyFood" && p1Choice === "paper") {
    points2 -= 1;
    pointsCounter2.innerHTML = points2
    console.log("what?")

}
if(p1Choice === "turkeyFood" && p2Choice === "paper") {
    points1 -= 1;
    pointsCounter1.innerHTML = points1
    
}
if(p1Choice === "turkeyFood" && p2Choice === "scissor") {
    points1 -= 1;
    pointsCounter1.innerHTML = points1
}
if(p1Choice === "turkeyFood" && p2Choice === "rock") {
    points1 -= 1;
    pointsCounter1.innerHTML = points1;
}




},1500);
    setTimeout(() => {
        playWinSeq();
        console.log(p1Choice + " " + p2Choice + " LAST LAST")
    }, 1500);
}

function playWinSeq() {
    if (p1Choice === "turkeyFood" || p2Choice === "turkeyFood") {
        draw = true // Prevent celebration, turkey really just works like a draw but with a minus point
    }
    if (draw === true) {
        null

    } else {        
        crowdAudio.volume = 0.3;
        crowdAudio.play()
    }

    //Reseting characters and shit
    let background1 = document.querySelector(".backdrop1");
    let background2 = document.querySelector(".backdrop2");

    let char1 = document.querySelector(".character1");
    let char2 = document.querySelector(".character2");
    
    if(gotPoints1 === true) {
        background1.classList.add("backdropCount1-2");
        background2.classList.remove("backdropCount2");
        char1.style.bottom = "5vh";
    }
    if(gotPoints2 === true) {
        background2.classList.add("backdropCount2-2");
        background1.classList.remove("backdropCount1");
        char2.style.bottom = "5vh";
    }

    setTimeout(() => {
    background1.classList.remove("backdropCount1"); // Animation for player 1 backdrop
    background2.classList.remove("backdropCount2");

    background1.classList.remove("backdropCount1-2");
    background2.classList.remove("backdropCount2-2");
    char1.style.left = "";
    char1.style.bottom = "";
    char2.style.right = "";
    char2.style.bottom = "";
    draw = false;
    }, 2000);
}



//
//
// CHARACTER MENU HOVER FUNC
//
// Player 1
let charOptBox1 = document.querySelectorAll(".skinOptBox1");
for (let charBox1 = 0; charBox1 < charOptBox1.length; charBox1++) {

    charOptBox1[charBox1].addEventListener("mouseenter", charHoverP1);
    charOptBox1[charBox1].addEventListener("mouseleave", charLeaveP1);


    
    

    function charHoverP1() {
        let charDesc = document.querySelector(".charDesc1");
        let charImg = document.querySelector(".charBigIcon1");
        let charTitle = document.querySelector(".charTitle1")
        let popupText = document.querySelector(".infoPopupText")
        let popupBox = document.querySelector(".infoPopup")

        switch (charBox1) {
            case 0: 
            console.log("hovering character fox");
            charTitle.innerHTML = "<h4>FOX<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/foxEmoji.png"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span> The first point(s) won is +2 instead of +1."
            break;
            
            case 1:
            console.log("hovering character pig");
            charTitle.innerHTML = "<h4>PIG<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/pigEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span> <br> Trigger <span class=descSpan>Pig Boost</span> after winning a round. <div class=descItalic>Useless for First to 3... That's my fault.</div>"

            
            popupBox.style.visibility = "visible"
            popupText.innerHTML = "<span class=descSpan>Pig Boost</span> grants +1 point(s)<br> if you are behind by 3 or more point(s)."

            break;

            case 2:
            console.log("hovering character turkey");
            charTitle.innerHTML = "<h4>TURKEY<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/turkeyEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span><br> Each round have a random chance replace 1 of opponent's options with a <span class=descSpan>turkey</span>.<div class=descItalic>The chance is 15% I think.</div>"

            

            popupBox.style.visibility = "visible"
            popupText.innerHTML = "<span class=descSpan>Turkey</span> grants -1 point(s) to yourself no matter the combination."


            for (let num = 0; num < popupText.length; num++) { 
            popupText[num].addEventListener("mouseenter", Popup); 
            }

            
            break;

            case 3: 
            console.log("hovering character microbe");
            charTitle.innerHTML = "<h4>MICROBE<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/microbeEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span><br> he go boom <span class=descSpan>turkey</span>.<div class=descItalic>The</div>"      
            break;      

            case 4: 
            console.log("hovering character camel");
            charTitle.innerHTML = "<h4>CAMEL<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/camelEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span><br> after winning 2, 4, 8 and 12 point(s) <span class=descSpan>enforce</span> paper for that round.<div class=descItalic>This is a defensive fella</div>"     
            
            popupBox.style.visibility = "visible"
            popupText.innerHTML = "<span class=descSpan>Enforce:</span> has no losing combination."


            for (let num = 0; num < popupText.length; num++) { 
            popupText[num].addEventListener("mouseenter", Popup); 
            }
            break;  
        }
        
    }

    function charLeaveP1() {
        let charImg = document.querySelector(".charBigIcon1");
        let popupText = document.querySelector(".infoPopupText")
        let popupBox = document.querySelector(".infoPopup")
        let charDesc = document.querySelector(".charDesc1");
        let charTitle = document.querySelector(".charTitle1");

        
        popupBox.style.visibility = "hidden"
        

    }
}


//// Player 2 VVVV
let charOptBox2 = document.querySelectorAll(".skinOptBox2");
for (let charBox2 = 0; charBox2 < charOptBox2.length; charBox2++) {

    charOptBox2[charBox2].addEventListener("mouseenter", charHoverP2);
    charOptBox2[charBox2].addEventListener("mouseleave", charLeaveP2);

    function charHoverP2() {
        let charDesc = document.querySelector(".charDesc2");
        let charImg = document.querySelector(".charBigIcon2");
        let charTitle = document.querySelector(".charTitle2");
        let popupText = document.querySelector(".infoPopupText");
        let popupBox = document.querySelector(".infoPopup");

        switch (charBox2) {
            case 0: 
            console.log("hovering character fox");
            charTitle.innerHTML = "<h4>FOX<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/foxEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span> The first point(s) won is +2 instead of +1."
            break;
            
            case 1:
            console.log("hovering character pig");
            charTitle.innerHTML = "<h4>PIG<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/pigEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span> <br> Trigger <span class=descSpan>Pig Boost</span> after winning a round. <div class=descItalic>Someone had to get the  comeback mechanic.</div>"

            
            popupBox.style.visibility = "visible"
            popupText.innerHTML = "<span class=descSpan>Pig Boost</span> grants +1 point(s)<br> if you are behind by 3 or more point(s)."
            break;

            case 2:
            console.log("hovering character turkey");
            charTitle.innerHTML = "<h4>TURKEY<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/turkeyEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span><br> Each round have a random chance to replace 1 of opponent's options with a <span class=descSpan>turkey</span>.<div class=descItalic>Quack.</div>"

            

            popupBox.style.visibility = "visible"
            popupText.innerHTML = "<span class=descSpan>Turkey</span> grants -1 point(s) to yourself no matter the combination."


            for (let num = 0; num < popupText.length; num++) { 
            popupText[num].addEventListener("mouseenter", Popup); 
            }
            break;

            case 3:
            console.log("hovering character microbe");
            charTitle.innerHTML = "<h4>MICROBE<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/microbeEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span><br> he go boom <span class=descSpan>turkey</span>.<div class=descItalic>The</div>"    
            break;

            case 4:
            console.log("hovering character camel");
            charTitle.innerHTML = "<h4>CAMEL<h4>";
            charImg.style.backgroundImage = "url(../imgs/chars/camelEmoji.png)"
            charImg.style.marginLeft = "0"
            charDesc.innerHTML = "<span class=descSpan>Passive:</span><br> after winning 2, 4, 8 and 12 point(s) <span class=descSpan>enforce</span> paper for that round.<div class=descItalic>This one is going to A tier</div>"     
            
            popupBox.style.visibility = "visible"
            popupText.innerHTML = "<span class=descSpan>Enforce:</span> has no losing combination."


            for (let num = 0; num < popupText.length; num++) { 
            popupText[num].addEventListener("mouseenter", Popup); 
            } 
            break;
        }
        
    }
    function charLeaveP2() {
        let charImg = document.querySelector(".charBigIcon1");
        let popupText = document.querySelector(".infoPopupText")
        let popupBox = document.querySelector(".infoPopup")
        let charDesc = document.querySelector(".charDesc1");
        let charTitle = document.querySelector(".charTitle1");

        
        popupBox.style.visibility = "hidden"
        

    }
}


/// Charcter Tweaks and changes



//WEEE
function P1characterFox() {
    if (currentChar1 === "fox") { // The first next point is +1 extra
        points1 += 1; 
        console.log("fox passive")
    }
  
}  

function P2characterFox() {
if (currentChar2 === "fox") {
        points2 += 1;
        console.log("gigaChad")
    } 
}
function characterPig() {
    if(currentChar1 === "pig" || currentChar2 === "pig") { // Check if any player is using pig
        if (currentChar1  === "pig") { // What to do if player 1 is pig
            if (points1 + 3 <= points2) {
                let pigBoost = document.querySelector(".pigBoost1");
                selectionAudio1.play()
                pigBoost.classList.add("pigBoostOn")
                setTimeout(() => {
                pigBoost.classList.remove("pigBoostOn") //To refresh the animation
                }, 4000);
                console.log("pig ability triggered " + points1 + " " + points2)
                points1 += 1;                
            }
        }
    if (currentChar2 === "pig") { //If player 2 is pig instead
        if (points2 + 3 <= points1) {
            let pigBoost = document.querySelector(".pigBoost2");
            selectionAudio2.play()
            pigBoost.classList.add("pigBoostOn")
            setTimeout(() => {
            pigBoost.classList.remove("pigBoostOn") //To refresh the animation
            }, 4000);
            console.log()  
            console.log("pig ability triggered " + points1 + " " + points2)
            points2 += 1;   
        }
    }
    }
}
            //Camel Passive
function camelPassive() {
    if (currentChar1 === "camel" || currentChar2 === "camel") {
        console.log("passive for cam")
        if (currentChar1 === "camel") {
            if (points1 === 2 && gotPoints1 === true ||points1 === 4 && gotPoints1 === true ||points1 === 8 && gotPoints1 === true ||points1 === 12 && gotPoints1 === true) {
                enforcePassive();
            }
        }
        if (currentChar2 === "camel") {
            if (points2 === 2 && gotPoints2 === true || points2 === 4 && gotPoints2 === true ||points2 === 8 && gotPoints2 === true || points2 === 12 && gotPoints2 === true) {
                enforcePassive();
            }
        }
    }
}
function enforcePassive() {
    if (currentChar1 === "camel") {
        let sandFall = document.querySelector(".fallPassive1")
        let enforcePaper = document.querySelector(".enforcePassive1")
        let playerModel = document.querySelector(".character1")

        enforcePaper.classList.add("enforceOn") //This is to allow Points shizz to work, check with classlist.contains to make passive work

        setTimeout(() => {
        sandFall.classList.add("sandFallOn")
        }, 500);
        
        setTimeout(() => {
        sandFall.classList.remove("sandFallOn")
        }, 2500);
        setTimeout(() => {
        enforcePaper.style.opacity = "1";
        }, 2000);
        setTimeout(() => {
        playerModel.style.bottom = "-100px"
        playerModel.style.left = "40px"
        }, 300);
        setTimeout(() => {
        playerModel.style.bottom = ""
        playerModel.style.left = ""
        }, 1000);
    }
    if (currentChar2 === "camel") {
        let sandFall = document.querySelector(".fallPassive2")
        let enforcePaper = document.querySelector(".enforcePassive2")
        let playerModel = document.querySelector(".character2") 

        enforcePaper.classList.add("enforceOn")

        setTimeout(() => {
        sandFall.classList.add("sandFallOn")
        }, 500);
            
        setTimeout(() => {
        sandFall.classList.remove("sandFallOn")
        }, 2500);
        setTimeout(() => {
        enforcePaper.style.opacity = "1";
        }, 2000);
        setTimeout(() => {
        playerModel.style.bottom = "-100px"
        playerModel.style.right = "40px"
        }, 300);
        setTimeout(() => {
        playerModel.style.bottom = ""
        playerModel.style.left = ""
        }, 1000);
    }
}
function enforceRemover() {
    let enforcePaper = document.querySelectorAll(".enforcePaper")
    for (let gag = 0; gag < enforcePaper.length; gag++) {
        enforcePaper[gag].style.opacity = "0"
        enforcePaper[gag].classList.remove("enforceOn")
    }
}

// Information hovers 
let popupText = document.querySelectorAll(".popupText")

for (let num = 0; num < popupText.length; num++) { 
popupText[num].addEventListener("mouseenter", Popup);

function Popup() {
    let infoPopupBox = document.querySelector(".infoPopup")
    console.log("pop")
    switch (x) {
        case 0: 
        infoPopupBox.style.visibility = "visible"
        break;
        } 
    }

}


//"First To" functions
function firstTo() {
    if (firstToMode === "3") {
        if (points1 === 3 || points2 === 3 ) {
            endGame();
        }
    }
    if (firstToMode === "5") {
        if (points1 === 5 || points2 === 5) {
            endGame();
        }
    }
    if (firstToMode === "10") {
        if (points1 === 10 || points2 === 10) {
            endGame();
        }
    }
}
//"first to" eventlisteners
let firstToButton = document.querySelectorAll(".bestNum")
for (let ftBtnNum = 0; ftBtnNum < firstToButton.length; ftBtnNum++) {
    firstToButton[ftBtnNum].addEventListener("click", firstToListen)

function firstToListen() {
        switch (ftBtnNum) {
            case 0:
                firstToMode = "3";
                console.log(firstToMode)
                firstToButton[0].classList.add("firstToBtnOn")
                firstToButton[1].classList.remove("firstToBtnOn")
                firstToButton[2].classList.remove("firstToBtnOn")
                firstToButton[3].classList.remove("firstToBtnOn")
            break;

            case 1:
                firstToMode = "5";
                console.log(firstToMode)
                firstToButton[1].classList.add("firstToBtnOn")
                firstToButton[0].classList.remove("firstToBtnOn")
                firstToButton[2].classList.remove("firstToBtnOn")
                firstToButton[3].classList.remove("firstToBtnOn")
            break;

            case 2:
                firstToMode = "10";
                console.log(firstToMode)
                firstToButton[2].classList.add("firstToBtnOn")
                firstToButton[1].classList.remove("firstToBtnOn")
                firstToButton[0].classList.remove("firstToBtnOn")
                firstToButton[3].classList.remove("firstToBtnOn")
            break;
            case 3: 
                firstToMode = "";
                console.log(firstToMode)
                firstToButton[3].classList.add("firstToBtnOn")
                firstToButton[0].classList.remove("firstToBtnOn")
                firstToButton[1].classList.remove("firstToBtnOn")
                firstToButton[2].classList.remove("firstToBtnOn")
            default:
                return;
            break;
        }
    }
}


// Turkey RNG System 
function turkeySuccess() {
    console.log('Turkey Spawned')
    if (currentChar1 === "turkey") {
        let rock = document.querySelector("#rock2")
        let feather = document.querySelector(".featherAni2")
        setTimeout(() => {
        rock.innerHTML = "<img class=turkeyImg2 src=../imgs/icons/turkeyFood.png>"
        feather.classList.add("featherAniOn")  
        chickenScreamAudio.play()
        }, 800);
        setTimeout(() => { // To remove the animation for next round
        feather.classList.remove("featherAniOn")  
        }, 3000);
        
        
        if(p2Choice === "rock") {
            p2Choice = "turkeyFood"
        }
    }
    if (currentChar2 === "turkey") {
        let rock = document.querySelector("#rock1");
        rock.innerHTML = "<img class=turkeyImg src=../imgs/icons/turkeyFood.png>"
        if(p1Choice === "rock") {
            p1Choice = "turkeyFood"
        }
    }
  }
  
  function turkeyFail() {
    console.log('Turkey Miss')
    return;
  }
function turkeyRemover() {
    if (p1Choice === "turkeyFood" || p2Choice === "turkeyFood") {
    let rock1 = document.querySelector("#rock2")
    let rock2 = document.querySelector("#rock1")
    p1Choice = "rock"
    p2Choice = "rock"
    
    }console.log("turkey effect cleared")
    rock1.innerHTML = "&#129704;"
    rock2.innerHTML = "&#129704;"
}
  
  
  var list = [
    {chance: 0.15, func: turkeySuccess}, // 15% chance to spawn.
    {chance: 1, func: turkeyFail},
  ];
  
  function callRandomFunction(list) {
    var rand = Math.random() // get a random number between 0 and 1
    var accumulatedChance = 0 // used to figure out the current
  
    var found = list.find(function(element) { // iterate through all elements 
      accumulatedChance += element.chance // accumulate the chances
      return accumulatedChance >= rand // tests if the element is in the range and if yes this item is stored in 'found'
    })
  
    if( found ) {
      console.log('match found for: ' + rand)
      found.func()
    } else {
      console.log('no match found for: ' + rand)
    }
  }
  
  