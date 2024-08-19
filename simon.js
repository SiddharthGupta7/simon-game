let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let max = 0;
let btns = ['yellow', 'red', 'purple', 'green']
let h2 = document.querySelector('h2');
document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 350);
}
function userflash(btn) {
    btn.classList.add("user");
    setTimeout(function () {
        btn.classList.remove("user");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    flash(randombtn);
}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        console.log("same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    }
    else {
        if (max < level) {
            max = level;
            h2.innerHTML = `Game over! Your new heighest score is <b>${level}</b> <br> Press any key to start`;
        }
        else {
            h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Your heighest score: <b>${max}</b><br> Press any key to start`;
        }
        reset();
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll('.btn');
for (but of allbtns) {
    but.addEventListener('click', btnpress);
}
function reset() {

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}