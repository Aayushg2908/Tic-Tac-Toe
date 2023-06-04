let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let gameOver = false

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// Function to check for the win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxText')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height = "150px"
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.margin = "10px"
        }
    })
}

// Game logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; // Here 0th index is taken because getElementsByClassName return array of all elements by that class name.
            }
        }
    })
})