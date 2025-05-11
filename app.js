const player1 = prompt("Enter Name Of Player 1: ");
const player2 = prompt("Enter Name Of Player 2: ");
const mainn = document.querySelector('#target');
const btn1 = document.querySelector('#btn_1');
const btn2 = document.querySelector('#btn_2');
const btn3 = document.querySelector('#btn_3');
const score = document.querySelector('#score');
let s1 = 0;
let s2 = 0;
let target = NaN;
mainn.addEventListener('input',function(){
    s1 = 0;
    s2 = 0;
    score.textContent = `${s1} to ${s2}`;
    target = parseInt(mainn.value);
})
btn1.addEventListener('click',function(){
    s1++;
    score.textContent = `${s1} to ${s2}`;
    if(s1===target){
        btn1.disabled=true;
        btn2.disabled=true;
        score.innerHTML = `<span style="color:green">${s1}</span> to <span style="color:red">${s2}</span>`;
        alert(`${player1} has won`);
    }
})
btn2.addEventListener('click',function(){
    s2++;
    score.textContent = `${s1} to ${s2}`;
    if(s2===target){
        btn1.disabled=true;
        btn2.disabled=true;
        score.innerHTML = `<span style="color:red">${s1}</span> to <span style="color:green">${s2}</span>`;
        alert(`${player2} has won`);
    }
});
btn3.addEventListener('click',function(){
    btn1.disabled=false;
    btn2.disabled=false;
    s1 = 0;
    s2 = 0;
    score.textContent = `${s1} to ${s2}`;
})
