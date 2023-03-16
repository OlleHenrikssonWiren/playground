

document.onclick = function testEnabled() { // This is for debugging
    console.log(keyBtn)
}
    let enabled1 = true; // Toggle key regs for player 1
    let enabled2 = true; // Toggle Key regs for player 2 

//Player "1" key regs.
document.addEventListener("keyup", (keyPress) = function player1Press(keyPress)  {
    let keyBtn = keyPress.key;

    if(enabled1 === true) {
        switch (keyBtn) {
        case "q": //Code for Q
        case true:
            console.log(keyBtn);
            SelectDone()
        break;

        case "w": // Code for W
        case true:
            console.log(keyBtn) 
            SelectDone()
        break;
            
        case "e": // Code for E
        case true:
            console.log(keyBtn)
            SelectDone()
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
            
        break;

        case "o":
            console.log(keyBtn2);
            SelectDone();

        break;
        
        case "p":
            console.log(keyBtn2);
            SelectDone();
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
});

// What to do after press

