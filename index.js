//rn= rendom number
var rn1= Math.floor((Math.random()*6) +1);
// number source
var ns1="images/dice"+rn1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ns1);

// for secon dice

var rn2= Math.floor((Math.random()*6)+1);

var ns2="images/dice"+rn2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",ns2);

if(rn1>rn2){
  document.querySelector("h1").innerHTML="⛳	player 1 win!";
}
else if(rn2>rn1){
  document.querySelector("h1").innerHTML="player 2 win! ⛳	";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
