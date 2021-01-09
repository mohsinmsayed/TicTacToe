








const exitPrmpt = document.querySelector("#exitPrmpt");
const exitBtn = document.querySelector(".exitBtn");

const noExitBtn = document.querySelector("#noExit");

const homePage = document.querySelector("#homePage");
const playerDetailsPage = document.querySelector("#playerDetails");
// Play Offline button click function (home page activity to player details activity)
const playOffline = document.querySelector("#playOffline");
playOffline.addEventListener("click", () => {
    homePage.classList.toggle("dNone");
    homePage.classList.toggle("dFlex");
    playerDetailsPage.classList.toggle("dFlex");
    playerDetailsPage.classList.toggle("dNone");
})

const enterDetails = document.querySelector("#playerDetails h2");
const p1NameInput = document.querySelector("#p1Name");
const p2NameInput = document.querySelector("#p2Name");
const p1Name = document.querySelectorAll(".p1");
const p2Name = document.querySelectorAll(".p2");
const gameBoard = document.querySelector("#gameBoard");
// Continue button function (player details activity to game play activity)
const continueBtn = document.querySelector("#continueBtn");
const continueFunc = function() {
    if (p1NameInput.value && p2NameInput.value) {
        p1Name[0].textContent = p1NameInput.value;
        p2Name[0].textContent = p2NameInput.value;
        playerDetailsPage.classList.toggle("dNone");
        playerDetailsPage.classList.toggle("dFlex");
        gameBoard.classList.toggle("dFlex");
        gameBoard.classList.toggle("dNone");
        enterDetails.style.color = "rgb(67, 97, 131)";
    } else {
        enterDetails.style.color = "red";
    }
}
continueBtn.addEventListener("click", continueFunc);


// variable decalarations (player scores, etc.)
let drawG = 0;
let turn = 1;
let tilePos = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let p1Score = 0;
let p2Score = 0;
// setting initial score
const p1ScoreEl = document.querySelector("#p1Score");
const p2ScoreEl = document.querySelector("#p2Score");
p1ScoreEl.textContent = p1Score;
p2ScoreEl.textContent = p2Score;

// function to control score board Score-Color
const colorScore = function() {
    if(p1Score>p2Score) {
        p1ScoreEl.style.color = "#70AF85";
        p2ScoreEl.style.color = "#F05454";
    } else if(p2Score>p1Score) {
        p2ScoreEl.style.color = "#70AF85";
        p1ScoreEl.style.color = "#F05454";
    } else if(p1Score == p2Score) {
        p2ScoreEl.style.color = "rgb(74, 81, 107)";
        p1ScoreEl.style.color = "rgb(74, 81, 107)";
    } else {console.log("something must have gone wrong")}
}

const gameContainer = document.querySelector(".gameContainer");
const whoWon = document.querySelector("#whoWon");
const onceAgain = document.querySelector(".onceAgain");

// function evaluates the game logic (determines the winner, updates scores etc)
const gameHandler = function() {
    let diag1Eval = ((tilePos[0][0] == 1 && tilePos[1][1] == 1 && tilePos[2][2] == 1) || (tilePos[0][0] == 0 && tilePos[1][1] == 0 && tilePos[2][2] == 0));
    let diag2Eval = ((tilePos[0][2] == 1 && tilePos[1][1] == 1 && tilePos[2][0] == 1) || (tilePos[0][2] == 0 && tilePos[1][1] == 0 && tilePos[2][0] == 0));
    if(diag1Eval) {
        document.querySelector(".row:nth-of-type(1) .tile:nth-of-type(2)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(1) .tile:nth-of-type(3)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(2) .tile:nth-of-type(1)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(2) .tile:nth-of-type(3)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(3) .tile:nth-of-type(1)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(3) .tile:nth-of-type(2)").classList.toggle("backgr");
        gameContainer.removeEventListener("click", handler);
        if(turn%2 !== 0) {
            p2Score++;
            p1ScoreEl.textContent = p1Score;
            p2ScoreEl.textContent = p2Score;
            whoWon.textContent = `${p2NameInput.value} WON +1`;
            onceAgain.classList.toggle("dInBlock");
            onceAgain.classList.toggle("dNone");
            colorScore();
        }
        else {
            p1Score++;
            p1ScoreEl.textContent = p1Score;
            p2ScoreEl.textContent = p2Score;
            whoWon.textContent = `${p1NameInput.value} WON +1`;
            onceAgain.classList.toggle("dInBlock");
            onceAgain.classList.toggle("dNone");
            colorScore();
        }
    } else if(diag2Eval) {
        document.querySelector(".row:nth-of-type(1) .tile:nth-of-type(1)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(1) .tile:nth-of-type(2)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(2) .tile:nth-of-type(1)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(2) .tile:nth-of-type(3)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(3) .tile:nth-of-type(2)").classList.toggle("backgr");
        document.querySelector(".row:nth-of-type(3) .tile:nth-of-type(3)").classList.toggle("backgr");
        gameContainer.removeEventListener("click", handler);
        if(turn%2 !== 0) {
            p2Score++;
            p1ScoreEl.textContent = p1Score;
            p2ScoreEl.textContent = p2Score;
            whoWon.textContent = `${p2NameInput.value} WON +1`;
            onceAgain.classList.toggle("dInBlock");
            onceAgain.classList.toggle("dNone");
            colorScore();
        }
        else {
            p1Score++;
            p1ScoreEl.textContent = p1Score;
            p2ScoreEl.textContent = p2Score;
            whoWon.textContent = `${p1NameInput.value} WON +1`;
            onceAgain.classList.toggle("dInBlock");
            onceAgain.classList.toggle("dNone");
            colorScore();
        }
    } else {
        for(let i=0; i<3; i++) {
            let rowEval = ((tilePos[i][0] == 1 && tilePos[i][1] == 1 && tilePos[i][2] == 1) || (tilePos[i][0] == 0 && tilePos[i][1] == 0 && tilePos[i][2] == 0));
            let colEval = ((tilePos[0][i] == 1 && tilePos[1][i] == 1 && tilePos[2][i] == 1) || (tilePos[0][i] == 0 && tilePos[1][i] == 0 && tilePos[2][i] == 0));
            // p.s. note: minimize the code required to toggle class backgr
            if(rowEval) {
                if(i==0) {
                    for(let i=1;i<4;i++){
                        document.querySelector(`.row:nth-of-type(2) .tile:nth-of-type(${i})`).classList.toggle("backgr");
                        document.querySelector(`.row:nth-of-type(3) .tile:nth-of-type(${i})`).classList.toggle("backgr");
                    }
                } else if(i==1) {
                    for(let i=1;i<4;i++){
                        document.querySelector(`.row:nth-of-type(1) .tile:nth-of-type(${i})`).classList.toggle("backgr");
                        document.querySelector(`.row:nth-of-type(3) .tile:nth-of-type(${i})`).classList.toggle("backgr");
                    }
                } else if(i==2) {
                    for(let i=1;i<4;i++){
                        document.querySelector(`.row:nth-of-type(1) .tile:nth-of-type(${i})`).classList.toggle("backgr");
                        document.querySelector(`.row:nth-of-type(2) .tile:nth-of-type(${i})`).classList.toggle("backgr");
                    }
                } else {
                    console.log("something must have gone wrong");
                }
                gameContainer.removeEventListener("click", handler);
                if(turn%2 !== 0) {
                    p2Score++;
                    p1ScoreEl.textContent = p1Score;
                    p2ScoreEl.textContent = p2Score;
                    whoWon.textContent = `${p2NameInput.value} WON +1`;
                    onceAgain.classList.toggle("dInBlock");
                    onceAgain.classList.toggle("dNone");
                    colorScore();
                }
                else {
                    p1Score++;
                    p1ScoreEl.textContent = p1Score;
                    p2ScoreEl.textContent = p2Score;
                    whoWon.textContent = `${p1NameInput.value} WON +1`;
                    onceAgain.classList.toggle("dInBlock");
                    onceAgain.classList.toggle("dNone");
                    colorScore();
                }
                break;
            } else if(colEval) {
                if(i==0) {
                    for(let i=1;i<4;i++){
                        document.querySelector(`.row:nth-of-type(${i}) .tile:nth-of-type(2)`).classList.toggle("backgr");
                        document.querySelector(`.row:nth-of-type(${i}) .tile:nth-of-type(3)`).classList.toggle("backgr");
                    }
                } else if(i==1) {
                    for(let i=1;i<4;i++){
                        document.querySelector(`.row:nth-of-type(${i}) .tile:nth-of-type(1)`).classList.toggle("backgr");
                        document.querySelector(`.row:nth-of-type(${i}) .tile:nth-of-type(3)`).classList.toggle("backgr");
                    }
                } else if(i==2) {
                    for(let i=1;i<4;i++){
                        document.querySelector(`.row:nth-of-type(${i}) .tile:nth-of-type(1)`).classList.toggle("backgr");
                        document.querySelector(`.row:nth-of-type(${i}) .tile:nth-of-type(2)`).classList.toggle("backgr");
                    }
                } else {
                    console.log("something must have gone wrong");
                }
                gameContainer.removeEventListener("click", handler);
                if(turn%2 !== 0) {
                    p2Score++;
                    p1ScoreEl.textContent = p1Score;
                    p2ScoreEl.textContent = p2Score;
                    whoWon.textContent = `${p2NameInput.value} WON +1`;
                    onceAgain.classList.toggle("dInBlock");
                    onceAgain.classList.toggle("dNone");
                    colorScore();
                }
                else {
                    p1Score++;
                    p1ScoreEl.textContent = p1Score;
                    p2ScoreEl.textContent = p2Score;
                    whoWon.textContent = `${p1NameInput.value} WON +1`;
                    onceAgain.classList.toggle("dInBlock");
                    onceAgain.classList.toggle("dNone");
                    colorScore();
                }
                break;
            } else {
                if(turn>9){
                    gameContainer.removeEventListener("click", handler);
                    drawG++;
                    whoWon.textContent = "DRAW";
                    onceAgain.classList.toggle("dInBlock");
                    onceAgain.classList.toggle("dNone");
                    colorScore();
                } else {
                    console.log("still playing...");
                }
            }
        }
    }
}

const tiles = document.querySelectorAll(".tile");

// function to control user click on game board
const markTile = function(tile) {
    if(tile != window.document.querySelector('.gameContainer') && tile.firstElementChild != null){
        if(10>turn>0) {
            if(turn % 2 !== 0) {
                tile.firstElementChild.setAttribute("src","imgResources/cross.png");
                tile.firstElementChild.style.visibility = "visible";
                tile.removeEventListener("click", handler);
                let i = 0;
                for(let element of tiles) {
                    if(element === tile) {
                        if(i<3){
                            tilePos[0][i] = 1;
                        } else if(i<6) {
                            tilePos[1][i-3] = 1;
                        } else if(i<9) {
                            tilePos[2][i-6] = 1;
                        }
                    }
                    i++;
                }
                turn++;
                gameHandler();
            } else if(turn % 2 === 0) {
                tile.firstElementChild.setAttribute("src","imgResources/circle.png");
                tile.firstElementChild.style.visibility = "visible";
                tile.removeEventListener("click", handler);
                let i = 0;
                for(let element of tiles) {
                    if(element === tile) {
                        if(i<3){
                            tilePos[0][i] = 0;
                        } else if(i<6) {
                            tilePos[1][i-3] = 0;
                        } else if(i<9) {
                            tilePos[2][i-6] = 0;
                        }
                    }
                    i++;
                }
                turn++;
                gameHandler();
            } else {
                console.log("Please Check, Something must've gone wrong");
            }
        }
    }
}
const handler = (event) => {markTile(event.target)};
gameContainer.addEventListener("click", handler);

// function to reset game board
const replay = function() {
    let r = 1;
    let t = 1;
    for(let row of tilePos) {
        for(let tile of row) {
            document.querySelector(`.row:nth-of-type(${r}) .tile:nth-of-type(${t})`).classList.remove("backgr");
            if(tile !== null) {
                document.querySelector(`.row:nth-of-type(${r}) .tile:nth-of-type(${t}) img`).style.visibility = "hidden";
            } else {
                console.log('inelse');
            }
            t++;
        }
        r++;
        t = 1;
    }
    whoWon.textContent = "";
    if(!(onceAgain.classList.contains("dNone"))){
        onceAgain.classList.toggle("dNone");
        onceAgain.classList.toggle("dInBlock");
    }
    turn = 1;
    tilePos = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    gameContainer.addEventListener("click", handler);
}
onceAgain.addEventListener("click", replay);

const backgrDiv = document.querySelector("#backgrDiv");
// function for Exit Confirmation Popup
const exitPt = function() {
    exitPrmpt.classList.toggle("dFlex");
    backgrDiv.classList.toggle("dFlex");
    exitPrmpt.classList.toggle("dNone");
    backgrDiv.classList.toggle("dNone");
}
exitBtn.addEventListener("click", exitPt);

const noExit = function() {
    exitPrmpt.classList.toggle("dNone");
    backgrDiv.classList.toggle("dNone");
    exitPrmpt.classList.toggle("dFlex");
    backgrDiv.classList.toggle("dFlex");
}
noExitBtn.addEventListener("click",noExit);

const results = document.querySelector("#results");
const resPage = document.querySelector("#resPage");
const victor = document.querySelector("#Victor");
const fScore = document.querySelectorAll(".fScore");
const fLose = document.querySelectorAll(".fLose");
const fDraw = document.querySelectorAll(".fDraw");

// function to end/exit game (redirects to results page activity)
const exitFunc = function() {
    resPage.classList.toggle("dFlex");
    resPage.classList.toggle("dNone");
    exitPrmpt.classList.toggle("dNone");
    gameBoard.classList.toggle("dNone");
    backgrDiv.classList.toggle("dNone");
    exitPrmpt.classList.toggle("dFlex");
    gameBoard.classList.toggle("dFlex");
    backgrDiv.classList.toggle("dFlex");
    p1Name[1].textContent = p1NameInput.value;
    p2Name[1].textContent = p2NameInput.value;
    if(p1Score==p2Score) {
        victor.textContent = "GAME DRAW";
    } else if(p1Score>p2Score) {
        victor.textContent = `${p1NameInput.value} WON!`;
    } else if(p1Score<p2Score) {
        victor.textContent = `${p2NameInput.value} WON!`;
    }
    fScore[0].textContent = `${p1Score} WINS`;
    fScore[1].textContent = `${p2Score} WINS`;
    fLose[0].textContent = `${p2Score} LOST`;
    fLose[1].textContent = `${p1Score} LOST`;
    fDraw[0].textContent = `${drawG/3} DRAW`;
    fDraw[1].textContent = `${drawG/3} DRAW`;
}
results.addEventListener("click",exitFunc);

const homeBtn = document.querySelector(".goHome");
// Redirects to Home Page Activity
const goHome = function() {
    resPage.classList.toggle("dNone");
    resPage.classList.toggle("dFlex");
    homePage.classList.toggle("dFlex");
    homePage.classList.toggle("dNone");
    p1Score = 0;
    p2Score = 0;
    drawG = 0;
    p1ScoreEl.textContent = p1Score;
    p2ScoreEl.textContent = p2Score;
    replay();
    colorScore();
}
homeBtn.addEventListener("click",goHome);

const newBtn = document.querySelector("#newGame");
// Redirects to player details page activity to play a new game
const newGame = function() {
    resPage.classList.toggle("dNone");
    resPage.classList.toggle("dFlex");
    playerDetailsPage.classList.toggle("dFlex");
    playerDetailsPage.classList.toggle("dNone");
    p1Score = 0;
    p2Score = 0;
    drawG = 0;
    p1ScoreEl.textContent = p1Score;
    p2ScoreEl.textContent = p2Score;
    replay();
    colorScore();
}
newBtn.addEventListener("click",newGame);

const withAI = document.querySelector("#withAI");
const withFriend = document.querySelector("#withFriend");
const comingSoon = document.querySelector("#comingSoon");
// function to handle Coming Soon Branches
const comingSoonFunc = function() {
    homePage.classList.toggle("dNone");
    homePage.classList.toggle("dFlex");
    comingSoon.classList.toggle("dNone");
    comingSoon.classList.toggle("dFlex");
}
withAI.addEventListener("click",comingSoonFunc);
withFriend.addEventListener("click",comingSoonFunc);

const homeBtnCS = document.querySelector("#comingSoon button");
homeBtnCS.addEventListener("click",comingSoonFunc);