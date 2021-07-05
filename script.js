'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const curren1El = document.querySelector('#current--1');
const curren0El = document.querySelector('#current--0 ');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let scores = [0,0];
let activePlayer = 0;
let playing = true;
const switchPlayer = function()
{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer  = activePlayer === 0? 1: 0; 
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

const init = function(){
    curren1El.textContent = 0;
    curren0El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active'); 

    currentScore = 0;
    scores = [0,0];
    activePlayer = 0;
    playing = true;
    document.querySelector(`#name--0`).textContent =  'Player 1';
    document.querySelector(`#name--1`).textContent =  'Player 2';


}

init();
btnRoll.addEventListener('click', function(){

    if(playing)
    {
        const dice = Math.trunc(Math.random()*6) + 1;
        //display the dice    
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        //check for the rolled one
        if(dice!==1)
        {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
        }
        else
        {
            
            switchPlayer();
        }
    
    }
        

}) 

btnHold.addEventListener('click',function()
{
    //add current score tp the active players score

        if(playing)
        {
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
            if(scores[activePlayer] >= 100)
            {
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
                 playing = false;
                

                 
                 document.querySelector(`#name--${activePlayer}`).textContent =  'Winner';
                 document.querySelector(`#name--${(Number(activePlayer) + 1)%2}`).textContent =  'Looser';
                 
    
            }
            else{
                switchPlayer();
    
            }
    
        }
        
})

btnNew.addEventListener('click',init);

   
