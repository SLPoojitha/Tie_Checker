var n=Math.floor(Math.random()*6)+1;
var m=Math.floor(Math.random()*6)+1;
if(n>m)
 document.querySelector("h1").innerHTML="⛳PLAYER1 WON";
else
 {
  if(m>n)
   document.querySelector("h1").innerHTML="PLAYER2 WON⛳";
  else
   document.querySelector("h1").innerHTML="🤡DRAW!👻";
 }
switch(n)
{
  case(1): document.querySelector("img").setAttribute("src","dice1.png");break;
  case(2): document.querySelector("img").setAttribute("src","dice2.png");break;
  case(3): document.querySelector("img").setAttribute("src","dice3.png");break;
  case(4): document.querySelector("img").setAttribute("src","dice4.png");break;
  case(5): document.querySelector("img").setAttribute("src","dice5.png");break;
  case(6): document.querySelector("img").setAttribute("src","dice6.png");break;
}
switch(m)
{
  case(1): document.querySelector(".sai").setAttribute("src","dice1.png");break;
  case(2): document.querySelector(".sai").setAttribute("src","dice2.png");break;
  case(3): document.querySelector(".sai").setAttribute("src","dice3.png");break;
  case(4): document.querySelector(".sai").setAttribute("src","dice4.png");break;
  case(5): document.querySelector(".sai").setAttribute("src","dice5.png");break;
  case(6): document.querySelector(".sai").setAttribute("src","dice6.png");break;
}
