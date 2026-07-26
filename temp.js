// Password Screen

function nextPassword(){

document.getElementById("welcome").classList.add("hide");

document.getElementById("passwordScreen").classList.remove("hide");

}



function checkPassword(){

let pass = document.getElementById("password").value;


if(pass.toLowerCase()=="love"){

document.getElementById("passwordScreen").classList.add("hide");

document.getElementById("loveScreen").classList.remove("hide");

}

else{

document.getElementById("wrongPassword").innerHTML =
"❌ Wrong Password Try Again ❤️";

}

}



// Love Screen

function yesLove(){

document.getElementById("loveText").innerHTML=
"🥰 I knew it Didu ❤️ You are the best sister ever!";

setTimeout(()=>{

document.getElementById("loveScreen").classList.add("hide");

document.getElementById("loadingScreen").classList.remove("hide");


setTimeout(()=>{

document.getElementById("loadingScreen").classList.add("hide");

document.getElementById("ageScreen").classList.remove("hide");


},3000);


},1500);


}



function noLove(){

document.getElementById("loveText").innerHTML=
"😒 Ohh no Didu! Think again 😂❤️";

}




// Create Balloons


let balloonsLeft=0;


function createBalloons(){

let age=document.getElementById("age").value;


if(age==""){

alert("Please enter your age ❤️");

return;

}


document.getElementById("ageScreen").classList.add("hide");

document.getElementById("balloonScreen").classList.remove("hide");


let container=document.getElementById("balloonContainer");

container.innerHTML="";


balloonsLeft=Number(age);


document.getElementById("left").innerHTML=balloonsLeft;



for(let i=0;i<balloonsLeft;i++){


let balloon=document.createElement("div");

balloon.className="balloon";


balloon.onclick=function(){


balloon.remove();

balloonsLeft--;

document.getElementById("left").innerHTML=balloonsLeft;



if(balloonsLeft==0){

setTimeout(()=>{

showCandle();

},1000);


}


}



container.appendChild(balloon);


}


}



// Candle Screen


function showCandle(){

document.getElementById("balloonScreen").classList.add("hide");

document.getElementById("candleScreen").classList.remove("hide");


}




// Envelope


function openEnvelope(){


document.getElementById("candleScreen").classList.add("hide");

document.getElementById("envelopeScreen").classList.remove("hide");


}



// Letter


function showLetter(){


document.getElementById("envelopeScreen").classList.add("hide");

document.getElementById("letterScreen").classList.remove("hide");


fireworks();


}




// Fireworks Effect


function fireworks(){


for(let i=0;i<50;i++){


let fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left=Math.random()*100+"%";

fire.style.top=Math.random()*100+"%";

fire.style.fontSize="30px";

fire.style.animation="fade 2s";


document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},2000);


}


}