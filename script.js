'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function(){

    // generating a random dice roll

    const dice = Math.trunc(Math.random()*6) + 1;



    //display the dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for the rolled one

    //true: switch to the next player

     

}) 

  