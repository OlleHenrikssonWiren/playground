

//document.onclick = function testEnabled() { // This is for debugging
 //   console.log(keyBtn)
//}
let enabled1 = true; // Toggle key regs for player 1
let enabled2 = true; // Toggle Key regs for player 2 
var selectionAudio1 = new Audio("../audio/rps/player1Select.mp3");
var selectionAudio2 = new Audio("../audio/rps/player2Select.wav");
var countAudio = new Audio("../audio/rps/countdown.ogg");
var countAudio2 = new Audio("../audio/rps/countdown.ogg");
var crowdAudio = new Audio("../audio/rps/crowdCheer.wav");
var drumAudio = new Audio("../audio/rps/drumBeat.wav");
let p1Choice = "";
let p2Choice = "";
let draw = false; // this might do some
let win = 0; //    does nothing lol
let loss = 0; // 
let points1 = 0; //actual score
let points2 = 0; //actual score
let halt = null;
gotPoints1 = false;
gotPoints2 = false;

let pointsCounter1 = document.querySelector(".score1"); // Textbox for score
let pointsCounter2 = document.querySelector(".score2");

document.querySelector(".resetBtn").onclick = function reset() {
    enabled1 = true;
    enabled2 = true;
    draw = false;
    halt = null;
    points1 = 0;
    points2 = 0;
    pointsCounter1.innerHTML = points1;
    pointsCounter2.innerHTML = points2;
    p1Choice = "";
    p2Choice = "";
    gotPoints1 = false;
    gotPoints2 = false;
}
let charBtn = document.querySelectorAll(".circleBtn")
for (let f = 0; f < charBtn.length; f++) {
    charBtn[f].addEventListener("click", characterSelect);
}
function characterSelect() {
    let player1Model = document.querySelector(".character1")
    let player2Model = document.querySelector(".character2")


            player1Model.src = "../imgs/chars/foxEmoji.png";
            console.log("fox player 1")
      

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
        case "i": //Code for left arrow
            console.log(keyBtn2 + "y");
            SelectDone();
            playSelectAni();
            selectionAudio2.play(); 
            
            p2Choice = "rock";
            
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
}<
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

function selectWinner() {
    let player1Item = document.querySelectorAll(".player1Item");
    let glowBox1 = document.querySelectorAll(".glowBox1");

    let glowBox2 = document.querySelectorAll(".glowBox2");
    let player2Item = document.querySelectorAll(".player2Item")

    let clap1 = document.querySelector(".clap1");
    let clap2 = document.querySelector(".clap2");
    
    setTimeout(() => { // Prevent players from spaming options
        enabled1 = true;
        enabled2 = true;
    }, 4000);

    console.log("selecting winner " +p1Choice)
for (let a = 0; a < glowBox1.length; a++) {
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

        }
    }

    for (let b = 0; b < glowBox2.length; b++) {
        switch (p2Choice) {
            case "rock":
                glowBox2[0].classList.add("glow");
            break;

            case "paper":
                glowBox2[1].classList.add("glow");
            break;

            case "scissor":
                glowBox2[2].classList.add("glow");
        }
    }

setTimeout(() => {
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
if (p1Choice === "scissor" && p2Choice == "rock") {
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
    
},1500);
    setTimeout(() => {
        playWinSeq();
    }, 1500);
}

function playWinSeq() {
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
        char1.style.bottom = "5vh"
    }
    if(gotPoints2 === true) {
        background2.classList.add("backdropCount2-2")
        background1.classList.remove("backdropCount1")
        char2.style.bottom = "5vh"
    }

    setTimeout(() => {
    background1.classList.remove("backdropCount1"); // Animation for player 1 backdrop
    background2.classList.remove("backdropCount2");

    background1.classList.remove("backdropCount1-2");
    background2.classList.remove("backdropCount2-2");
    char1.style.left = ""
    char1.style.bottom = ""
    char2.style.right = ""
    char2.style.bottom = ""
    gotPoints1 = false;
    gotPoints2 = false;
    draw = false;

    }, 2000);
    

}