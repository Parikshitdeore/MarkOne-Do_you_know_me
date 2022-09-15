var scan = require("readline-sync")

var userName = scan.question("Enter your name : ");
console.log("Hey "+userName+" !! , Welcome to DO YOU KNOW ME");
var score = 0;

function play(q,a){
  var userAns=scan.question(q);
  if(userAns===a){
    console.log("Right! ");
    score = score + 1;
  }
  else{
    console.log("Wrong! ");
  }
console.log("Current score : "+score)  ;
console.log("----------------------"); 
}
function finscore(){
if(score>3){
  console.log("Congratulations!! Your Final score is : "+score);
}
else{
  console.log("Your Final score is : "+score);
  console.log("Do your research next time! xD");
}
}

play("What is my favourite hobby? ","gaming")
play("What is my favourite sport? ","cricket")
play("What is my mother tongue? ","marathi")
play("What is my favourite colour? ","blue")
play("Have I ever visited any foreign country? (yes/no) ","no")
finscore()