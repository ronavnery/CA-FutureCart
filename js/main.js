'use strict';

function increaseAmount(num) {
    var elAmount = document.querySelector(`.item${num}`);
    elAmount.innerHTML++;
    var elPrice = document.querySelector(`.price${num}`);
}

function decreaseAmount(num) {
    var elAmount = document.querySelector(`.item${num}`);
    if (elAmount.innerHTML === '1') return;
    elAmount.innerHTML--;
}