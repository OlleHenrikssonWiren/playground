

//document.onclick = function testEnabled() { // This is for debugging
 //   console.log(keyBtn)
//}
let enabled1 = true; // Toggle key regs for player 1
let enabled2 = true; // Toggle Key regs for player 2 
var selectionAudio1 = new Audio("../audio/rps/player1Select.ogg");
var selectionAudio2 = new Audio("../audio/rps/player2Select.wav");

document.querySelector(".resetBtn").onclick = function reset() {
    enabled1 = true;
    enabled2 = true;
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
        break;

        case "w": // Code for W
        case true:
            console.log(keyBtn) 
            SelectDone()
            playSelectAni() 
            selectionAudio1.play();
        break;
            
        case "e": // Code for E
        case true:
            console.log(keyBtn)
            SelectDone()
            playSelectAni() 
            selectionAudio1.play(); 
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
            
        break;

        case "o":
            console.log(keyBtn2);
            SelectDone();
            playSelectAni();
            selectionAudio2.play(); 
        break;
        
        case "p":
            console.log(keyBtn2);
            SelectDone();
            playSelectAni();
            selectionAudio2.play(); 
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
    }
});
document.onclick = function enableChecker() {
// What to do after press.
if (enabled1 === false && enabled2 === false) {
    console.log("count down")

    } else {
        console.log("sitl wa" + enabled1 + enabled2);
    }
}<
    document.addEventListener("keyup", checkCountdown);

function checkCountdown() { // To check if countdown should begin
    if(enabled1 === false && enabled2 === false) {
        console.log("3. 2 . 1")
        startCountdown();
    } else {
        console.log("oopsie")
    }
}

function startCountdown() {
    
}