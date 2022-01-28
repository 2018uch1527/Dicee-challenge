$("body").keydown(function(){
  var randomNumber1=Math.floor(Math.random()*6)+1;
  var source1="images/dice"+ randomNumber1 +".png";
  document.querySelector(".img1").setAttribute("src",source1);

  var randomNumber2=Math.floor(Math.random()*6)+1;
  var source2="images/dice"+ randomNumber2 +".png";
  document.querySelector(".img2").setAttribute("src",source2);
  if(randomNumber1>randomNumber2)
  document.querySelector("h1").textContent="🚩 player 1 wins!";
  else if(randomNumber1<randomNumber2)
  document.querySelector("h1").textContent="player 2 wins🚩";
  else
  document.querySelector("h1").textContent="Its a Draw!";
    $("h4").css("display","block");
})
