// Játék indítása a választott nehézségi szint alapján
function startGameEasy() {

    // Kezdőképernyő elrejtése
    document.getElementById("startScreenEasy").style.display = "none";
    document.getElementById("startScreenNormal").style.display = "none";
    document.getElementById("startScreenExtreme").style.display = "none";

    // Játékterület megjelenítése
    document.getElementById("gameEasy").style.display = "block";
}

function startGameNormal() {

    // Kezdőképernyő elrejtése
    document.getElementById("startScreenEasy").style.display = "none";
    document.getElementById("startScreenNormal").style.display = "none";
    document.getElementById("startScreenExtreme").style.display = "none";

    // Játékterület megjelenítése
    document.getElementById("gameNormal").style.display = "block";
}

function startGameExtreme() {

    // Kezdőképernyő elrejtése
    document.getElementById("startScreenEasy").style.display = "none";
    document.getElementById("startScreenNormal").style.display = "none";
    document.getElementById("startScreenExtreme").style.display = "none";

    // Játékterület megjelenítése
    document.getElementById("gameExtreme").style.display = "block";
}


//a 3 lehetséges opciót eltároljuk egy tömben
var options = ["rock", "paper"];
var options2 = ["rock", "scissors"];
var options3 = ["paper", "scissors"];

var optionsRed = ["rock_rock", "paper_paper", "scissors_scissors", "destroyer", "joker"];

//ezt a tömböt azért hozzuk létre, hogy itt fel lehet cserélni az elemeket |||| az első a játékosé, a  második pedig a gépé||||
var choices = ["rock", "paper", "scissors"];
var choices2 = ["rock", "paper", "scissors"];

//ez az extrémhez van, hogy ebből törölhessünk elemet
var choices3 = ["rock", "paper", "scissors"];
var whichElement = null;
var whichBlock = null;


//megkapjuk a játékos vállasztását
function playEasy(playerChoice) {
    var resultMessage = document.getElementById("result");
    
    //a 3 lehetséges opciót eltároljuk egy tömben
    var choices = ["rock", "paper", "scissors"];
    //a gépnek random adunk egy elemet a tömböl  (0-1 * tömbb hossz és kerekítünk az egészre)
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //megadjuk a játék összes kimenetét és annak az eredményét
    var result;
    if (choices[playerChoice] === computerChoice) {
        result = "It's a tie!";
    } else if ((choices[playerChoice] === "rock" && computerChoice === "scissors") ||
               (choices[playerChoice] === "paper" && computerChoice === "rock") ||
               (choices[playerChoice] === "scissors" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    
    //felirat a kör végén
    resultMessage.innerText = "You chose " + choices[playerChoice] + ". Computer chose " + computerChoice + ". " + result;
}

function playNormal(playerChoice) {
    
    //a resltMessagnek a kinézetét megadjuk
    var resultMessage = document.getElementById("result");

    //a gépnek random adunk egy elemet a tömböl  (0-1 * tömbb hossz és kerekítünk az egészre)
    var computerChoice0 = Math.floor(Math.random() * choices2.length)
    var computerChoice = choices2[computerChoice0];



    //megadjuk a játék összes kimenetét és annak az eredményét
    var result;
    if (choices[playerChoice] === computerChoice) {
        result = "It's a tie!";
    } else if ((choices[playerChoice] === "rock" && computerChoice === "scissors") ||
               (choices[playerChoice] === "paper" && computerChoice === "rock") ||
               (choices[playerChoice] === "scissors" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    //megváltoztatjuk az aktuális elemet egy random elemre mindkét tömbben
    if (choices[playerChoice] === "rock")
    {
        choices[playerChoice] = options3[Math.floor(Math.random() * options3.length)];
    }else if (choices[playerChoice] === "paper")
    {
        choices[playerChoice] = options2[Math.floor(Math.random() * options2.length)];
    }else if (choices[playerChoice] === "scissors")
    {
        choices[playerChoice] = options[Math.floor(Math.random() * options.length)];
    }

    if (choices2[computerChoice0] === "rock")
    {
        choices2[computerChoice0] = options3[Math.floor(Math.random() * options3.length)];

    }else if (choices2[computerChoice0] === "paper")
    {
        choices2[computerChoice0] = options2[Math.floor(Math.random() * options2.length)];

    }else if (choices2[computerChoice0] === "scissors")
    {
        choices2[computerChoice0] = options[Math.floor(Math.random() * options.length)];
    }


    //megváltoztatjuk a nevét is
    var buttons = document.getElementsByClassName("btn2");
    for(var i = 0; i < 3; i++)
    {
        buttons[i].innerText = choices[i];
    }

    //felirat a kör végén
    resultMessage.innerText = "You chose " + choices[playerChoice] + ". Computer chose " + computerChoice + ". " + result;
}

function playExtreme(playerChoice) {

    var buttons = document.getElementsByClassName("btn3");

    //ellenőrizzük, hogy vállasztott e új kártyát a játékos
    if (choices3.length !== 3)
    {
        return;
    }

    //eltünteti a kártyákat a bal és jobb oldalon
    document.getElementById("cards_left").style.display = "none";
    document.getElementById("cards_right").style.display = "none";
    
    //a resltMessagnek a kinézetét megadjuk
    var resultMessage = document.getElementById("result");

    //a gépnek random adunk egy elemet a tömböl  (0-1 * tömbb hossz és kerekítünk az egészre)
    var computerChoice0 = Math.floor(Math.random() * choices2.length)
    var computerChoice = choices2[computerChoice0];



    //megadjuk a játék összes kimenetét és annak az eredményét
    var result;
    if ((choices3[playerChoice] === computerChoice) ||
        (choices3[playerChoice] === "scissors_scissors" && computerChoice === "rock") ||
        (choices3[playerChoice] === "rock_rock" && computerChoice === "paper") ||
        (choices3[playerChoice] === "paper_paper" && computerChoice === "scissors") ||
        (choices3[playerChoice] === "rock" && computerChoice === "scissors_scissors") ||
        (choices3[playerChoice] === "paper" && computerChoice === "rock_rock") ||
        (choices3[playerChoice] === "scissors" && computerChoice === "paper_paper")) {
        result = "It's a tie!";
    } else if ((choices3[playerChoice] === "rock" && computerChoice === "scissors") ||
               (choices3[playerChoice] === "paper" && computerChoice === "rock") ||
               (choices3[playerChoice] === "scissors" && computerChoice === "paper") ||
               (choices3[playerChoice] === "rock_rock" && computerChoice === "rock") ||
               (choices3[playerChoice] === "paper_paper" && computerChoice === "paper") ||
               (choices3[playerChoice] === "scissors_scissors" && computerChoice === "scissors") ||
               (choices3[playerChoice] === "rock_rock" && computerChoice === "scissors") ||
               (choices3[playerChoice] === "rock_rock" && computerChoice === "scissors_scissors") ||
               (choices3[playerChoice] === "paper_paper" && computerChoice === "rock") ||
               (choices3[playerChoice] === "paper_paper" && computerChoice === "rock_rock") ||
               (choices3[playerChoice] === "scissors_scissors" && computerChoice === "paper") ||
               (choices3[playerChoice] === "scissors_scissors" && computerChoice === "paper_paper") ||
               (choices3[playerChoice] === "joker") ||
               (computerChoice === "destroyer")) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    //felirat a kör végén
    resultMessage.innerText = "You chose " + choices3[playerChoice] + ". Computer chose " + computerChoice + ". " + result;

    //megváltoztatjuk az aktuális elemet egy random elemre a robotnál
    var whichCards = Math.floor(Math.random() * 2);
    if(whichCards === 0)
    {
        if (choices2[computerChoice0] === "rock")
        {
            choices2[computerChoice0] = options3[Math.floor(Math.random() * options3.length)];
    
        }else if (choices2[computerChoice0] === "paper")
        {
            choices2[computerChoice0] = options2[Math.floor(Math.random() * options2.length)];
    
        }else if (choices2[computerChoice0] === "scissors")
        {
            choices2[computerChoice0] = options[Math.floor(Math.random() * options.length)];
        }        
    }else{
        choices2[computerChoice0] = optionsRed[Math.floor(Math.random() * optionsRed.length)];
    }


    //megváltoztatjuk a baloldali kártyákat a nevét annak megfelelően, hogy ne tudja azt vállasztani, amit az előbb vállasztott
    var buttons2 = document.getElementsByClassName("btn_left");
    if (choices3[playerChoice] === "rock") {
        buttons2[0].innerText = options3[0];
        buttons2[1].innerText = options3[1];
        whichBlock = 3;
    }else if (choices3[playerChoice] === "paper") {
        buttons2[0].innerText = options2[0];
        buttons2[1].innerText = options2[1];
        whichBlock = 2;
    }else if (choices3[playerChoice] === "scissors") {
        buttons2[0].innerText = options[0];
        buttons2[1].innerText = options[1];
        whichBlock = 1;
    }else
    {
        buttons2[0].innerText = options3[0];
        buttons2[1].innerText = options3[1];
        whichBlock = 4;
    }

    //töröljük a nevét az előbb használt gombnak
    buttons[playerChoice].innerText = "-";

    //töröljük az elemet a choices3 tömből
    choices3.splice(playerChoice, 1);

    //elmentjük, hogy melyik elemet töröltük
    whichElement = playerChoice;

    //megjeleníti a kártyákat a bal és jobb oldalon
    document.getElementById("cards_left").style.display = "block";
    document.getElementById("cards_right").style.display = "block";
}


function CardOption1(card)
{
    //ellenőrizzük, hogy vállasztott e új kártyát a játékos
    if (choices3.length !== 2)
    {
        return;
    }

    if (whichBlock === 1) {
        choices3.splice(whichElement, 0, options[card]);
    }else if (whichBlock === 2) {

        choices3.splice(whichElement, 0, options2[card]);
    }else if (whichBlock === 3) {

        choices3.splice(whichElement, 0, options3[card]);
    }else if(whichBlock === 4)
    {
        choices3.splice(whichElement, 0, options3[card]);
    }

    //frissitjük a kártyák neveit
    var buttons = document.getElementsByClassName("btn3");
    for(var i = 0; i < 3; i++)
    {
        buttons[i].innerText = choices3[i];
    }
}

function CardOption2()
{
    //ellenőrizzük, hogy vállasztott e új kártyát a játékos

    choices3.splice(whichElement, 0, optionsRed[Math.floor(Math.random() * optionsRed.length)]);
    //frissitjük a kártyák neveit
    var buttons = document.getElementsByClassName("btn3");
    for(var i = 0; i < 3; i++)
    {
        buttons[i].innerText = choices3[i];
    }
}
