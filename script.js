const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🖐️',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]
selectionButtons.forEach(selectionButtons =>{
    selectionButtons.addEventListener('click', ()=>{
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    })
});

function makeSelection(selection){
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const ComputerWinner = isWinner(computerSelection, selection);
    console.log(computerSelection);
    addSelectionResult(computerSelection, ComputerWinner);
    addSelectionResult(selection, yourWinner);
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if(winner) div.classList.add('winner');
    finalColumn.after(div);
}

function isWinner(selection, opponentSelection){
    selection.beats == opponentSelection.name;
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random()* SELECTIONS.length);
    return SELECTIONS[randomIndex];
}










// const choiceBtn = document.querySelector('.choiceBtn');

// let player;
// let computer;
// let result;
// choiceBtn.forEach(button => button.addEventListener("click", () => {

//     player = button.textContent;
//     console.log(computerChoice());

// }));


// function computerChoice(){
//     const choice = ['Rock', 'Paper', 'Scissor'];

//     const randomItem = Math.floor(Math.random() * choice.length);
//     const gameChoice = choice[randomItem];

// }









// // Remain to make it in a function 
// function GamePlay(){
// const choice = ['Rock', 'Paper', 'Scissor'];

// const computer = Math.floor(Math.random() * choice.length);
// const computerChoice = choice[randomItem];


// }

// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissor = document.querySelector("#scissor");

// rock.addEventListener('click', );
// paper.addEventListener('click');
// scissor.addEventListener('click');