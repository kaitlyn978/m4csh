question_turn="player_1";
answer_turn="player_2";
player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charAt1=word.charAt(1);
     
    length_divided=Math.floor(word.length/2);
    charAt2=word.charAt(length_divided);
    length_minus=word.length-1;
    charAt3=word.charAt(length_minus);
    replace_charAt1=word.replace(charAt1,"_");
    replace_charAt2=replace_charAt1.replace(charAt2,"_");
    replace_charAt3=replace_charAt2.replace(charAt3,"_");
    question_word="<h4 id='word_display'> Q."+replace_charAt3+"</h4>";
      answer_word="<br><br>Answer:<input type='text' id='input_check_box'>";
      check_button="<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
      row=question_word+answer_word+check_button;
      document.getElementById("output").innerHTML= row;
      document.getElementById("word").innerHTML= "";
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if (answer==word) {
      if (answer_turn=="player_1") {
          player1_score=player1_score+1;
          document.getElementById("player1_score").innerHTML= player1_score;
      } 
      else{
       player2_score=player2_score+1;
       document.getElementById("player2_score").innerHTML=player2_score;
      } 
    }
    if (question_turn=="player_1") {
        document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
         question_turn="player_2";
    }
 else{
     question_turn="player_2";
     document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
     question_turn="player_1";
 }
 if (answer_turn=="player_1") {
     document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
     answer_turn="player_2";
 }
 else{
     answer_turn="player_1";
     document.getElementById("").innerHTML="Answer turn-"+player1_name;
 }
 document.getElementById("output").innerHTML="";
}
