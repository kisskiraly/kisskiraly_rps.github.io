//a játékos választása
function play(playerChoice) {
    var resultMessage = document.getElementById("result");
    
    //a 3 lehetséges opciót eltároljuk egy tömben
    var choices = ["rock", "paper", "scissors"];
    //a gépnek random adunk egy elemet a tömböl  (0-1 * tömbb hossz és kerekítünk az egészre)
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //megadjuk a játék összes kimenetét és annak az eredményét
    var result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
               (playerChoice === "paper" && computerChoice === "rock") ||
               (playerChoice === "scissors" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    //a játékos vállasztását, átalakítjuk a tömben lévő pozzítszióba
    var lastOptionCounter;
    if (playerChoice === "rock" )
    {
        lastOptionCounter = 0;
    }else if (playerChoice === "paper")
    {
        lastOptionCounter = 1;
    }else if(playerChoice === "scissors")
    {
        lastOptionCounter = 2;
    }
   
    
    //felirat a kör végén
    resultMessage.innerText = "You chose " + playerChoice + ". Computer chose " + computerChoice + ". " + result;


    //mindegyk gombot megnyomvatóvá teszünk, majd megnyomhatatnná tesszük azt ameilyiket legutób vállasztottuk
    var buttons = document.getElementsByClassName("btn");
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    buttons[lastOptionCounter].disabled = true;

}
