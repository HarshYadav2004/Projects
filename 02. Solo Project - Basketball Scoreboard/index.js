let playerFirst = document.getElementById("player-first");
let playerSecond = document.getElementById("player-second");
let count = 0;
let scount = 0;

function addOne(a){
    if (a==1){
        count = count + 1
        playerFirst.textContent = count
    }
    if (a==2){
        scount = scount + 1
        playerSecond.textContent = scount
    }
}
function addTwo(a){
    if (a==1){
        count = count + 2
        playerFirst.textContent = count
    }
    if (a==2){
        scount = scount + 2
        playerSecond.textContent = scount
    }
}
function addThree(a){
    if (a==1){
        count = count + 3
        playerFirst.textContent = count
    }
    if (a==2){
        scount = scount + 3
        playerSecond.textContent = scount
    }
}

function reset(){
    scount = 0
    count=0
    playerFirst.textContent = count
    playerSecond.textContent = scount
}