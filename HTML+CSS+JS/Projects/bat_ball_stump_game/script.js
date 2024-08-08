let score;
let temp = localStorage.getItem("score");
  if (!temp) {
    score = {
      won: 0,
      tie: 0,
      lost: 0,
    };
  } else {
    score = JSON.parse(temp);
  }
  document.getElementById("won_display").innerHTML=`${score.won}`;
   document.getElementById("tie_display").innerText=`${score.tie}`;
   document.getElementById("lost_display").innerText=`${score.lost}`;
function updateScore(s) {
  let temp = localStorage.getItem("score");
  if (!temp) {
    score = {
      won: 0,
      tie: 0,
      lost: 0,
    };
  } else {
    score = JSON.parse(temp);
  }
  if (s == "Won") {
    score.won += 1;
  } else if (s == "Tie") {
    score.tie += 1;
  } else {
    score.lost += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
}

function show_result(s) {
  let random_num = Math.random() * 3;
  let comp_choice;
  if (random_num < 1) {
    comp_choice = "Bat";
  } else if (random_num < 2) {
    comp_choice = "Ball";
  } else {
    comp_choice = "Stump";
  }

  let res;
  if (s == "Bat") {
    if (comp_choice == "Bat") {
      res = "Tie";
    } else if (comp_choice == "Ball") {
      res = "Won";
    } else {
      res = "Lose";
    }
  } else if (s == "Ball") {
    if (comp_choice == "Bat") {
      res = "Lose";
    } else if (comp_choice == "Ball") {
      res = "Tie";
    } else {
      res = "Lose";
    }
  } else {
    if (comp_choice == "Bat") {
      res = "Won";
    } else if (comp_choice == "Ball") {
      res = "Lose";
    } else {
      res = "Tie";
    }
  }
  updateScore(res);
  if(res!="Tie"){
    document.getElementById(
      "display"
    ).innerHTML = `You ${res}`;
  }
  else{
    document.getElementById(
      "display"
    ).innerHTML = `It's ${res}`;
  }
  
   document.getElementById("won_display").innerHTML=`${score.won}`;
   document.getElementById("tie_display").innerText=`${score.tie}`;
   document.getElementById("lost_display").innerText=`${score.lost}`;
}

function clear_score()
{
  localStorage.clear();
  score.won=0;
  score.tie=0;
  score.lost=0;
  document.getElementById("won_display").innerHTML=`${score.won}`;
   document.getElementById("tie_display").innerText=`${score.tie}`;
   document.getElementById("lost_display").innerText=`${score.lost}`;
   document.getElementById(
    "display"
  ).innerHTML = ``;

}
