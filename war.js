secondHp = document.getElementById("second-hp")
let points = [100, 100, 0]
let totalHp = 100
let totalHp2 = 100
let totalEp = 0
let totalEp2 = 0

function fight(){
    a =   Math.ceil(Math.random()* 20);
    damage()}

let criticalEl = document.getElementById("critical-el")
let defendEl = document.getElementById("defend-el")
let ep = document.getElementById("ep-one")

function damage(){
    totalHp = totalHp - a;
    secondHp.textContent = "HP: " + totalHp + "/100";
    if (totalHp <= 0){
        secondHp.textContent = "You lost"
    } else if ( a === 20){
        criticalEl.textContent = "Criticla hit!!!"
    } else {
        criticalEl.textContent = " "
    }
}

function defend(){
    a = Math.ceil(Math.random()*10)

    if (totalEp < 30){
        a = Math.ceil(Math.random()*5)}
    
    else if (totalEp < 45){
    a = Math.ceil(Math.random()*3)
    }
    else if (totalEp < 50){
        a = 1
    }
    
    increaseEp()
}
canBringEp = true
epMax = false
function increaseEp() {
    if (canBringEp === true && epMax === false){
    totalEp = totalEp + a;
    ep.textContent = "EP: " +  totalEp + "/50"
    }

if (totalEp >=50){
    canBringEp = false;
    epMax = true;
}}
function heal(){
    if (totalEp>0){
    canUseHeal = true;
    }
    if (totalHp2<60){
        needHealth = true;
    }
    addingHeal()}

function addingHeal(){
    if (canUseHeal === true && needHealth === true){
    a = Math.floor(totalEp/2)
    totalHp2 = totalHp2+a
    firstHp.textContent = "HP: " + totalHp2 + "/100"
    b = a * 2
    totalEp = totalEp-b;
    ep.textContent = "EP: " + totalEp  + "/50"
    }
}


// Working with 1st character

let firstHp = document.getElementById("first-hp")
let secondEp  = document.getElementById("second-ep")
console.log (secondEp)

function fight1(){
    a = Math.ceil(Math.random()*20);
    damage2()
}

function damage2(){
    totalHp2  = totalHp2 - a;
    firstHp.textContent = "HP: " + totalHp2 + "/100";
    if (totalHp2 <= 0){
        firstHp.textContent = "You lost"
    } else if ( a === 20){
        criticalEl.textContent = "Criticla hit!!!"
    } else {
        criticalEl.textContent = " "
    }
}


function defend1(){ 
    // if (totalEp = 0){
    a = Math.ceil(Math.random()*10)
    if  (totalEp2< 30){
        a = Math.ceil(Math.random()*5)
    } else if (totalEp2 < 45){
        a = Math.ceil(Math.random()*3)
    } else if (totalEp2 < 50){
        a = 1
    }
    addingEp()
    // secondEp.textContent = "This was clicked"
}
canBringEp2 = true;
epMax2 = false;
function addingEp(){
    
    if (canBringEp2 === true && epMax2 === false){
    totalEp2 += a
    secondEp.textContent = "EP: " + totalEp2 + "/50"}

    if (totalEp2 >= 50) {
        canBringEp2 = false;
        epMax2 = true;
    }
}

function heal1(){
    if (totalHp < 60){
        needHealth2 = true;
    } 
    if (totalEp2 > 0){
        canUseHeal2 = true;
    }
    useHeal()
}
function useHeal(){
    if (needHealth2 === true && canUseHeal2 === true){
        a = Math.floor(totalEp2 / 2);
        totalHp += a;
        secondHp.textContent = "HP: " + totalHp +"/100"
        b = a * 2;
        totalEp2 -= b;
        secondEp.textContent = "EP: " + totalEp2 + "/50"
    }
}



