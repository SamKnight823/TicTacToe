let turn = 0;
let letter1 = "";
let letter2 = "";
let letter3 = "";
let letter4 = "";
let letter5 = "";
let letter6 = "";
let letter7 = "";
let letter8 = "";
let letter9 = "";

var card = document.getElementById('card1');
card.addEventListener( 'click', function(){
  if(turn % 2 == 0){
    card.classList.toggle('is-flipped');
    document.getElementById('not').innerHTML= 'X';
    letter1 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card.classList.toggle('is-flipped');
    letter1 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card2 = document.getElementById('card2');
card2.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card2.classList.toggle('is-flipped');
    document.getElementById('not2').innerHTML= 'X';
    letter2 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card2.classList.toggle('is-flipped');
    letter2 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
});

var card3 = document.getElementById('card3');
card3.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card3.classList.toggle('is-flipped');
    document.getElementById('not3').innerHTML= 'X';
    letter3 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card3.classList.toggle('is-flipped');
    letter3 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card4 = document.getElementById('card4');
card4.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card4.classList.toggle('is-flipped');
    document.getElementById('not4').innerHTML= 'X';
    letter4 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card4.classList.toggle('is-flipped');
    letter4 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card5 = document.getElementById('card5');
card5.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card5.classList.toggle('is-flipped');
    document.getElementById('not5').innerHTML= 'X';
    letter5 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card5.classList.toggle('is-flipped');
    letter5 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card6 = document.getElementById('card6');
card6.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card6.classList.toggle('is-flipped');
    document.getElementById('not6').innerHTML= 'X';
    letter6 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card6.classList.toggle('is-flipped');
    letter6 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card7 = document.getElementById('card7');
card7.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card7.classList.toggle('is-flipped');
    document.getElementById('not7').innerHTML= 'X';
    letter7 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card7.classList.toggle('is-flipped');
    letter7 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card8 = document.getElementById('card8');
card8.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card8.classList.toggle('is-flipped');
    document.getElementById('not8').innerHTML= 'X';
    letter8 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card8.classList.toggle('is-flipped');
    letter8 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

var card9 = document.getElementById('card9');
card9.addEventListener( 'click', function() {
  if(turn % 2 == 0){
    card9.classList.toggle('is-flipped');
    document.getElementById('not9').innerHTML= 'X';
    letter9 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card9.classList.toggle('is-flipped');
    letter9 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
});

$(document).ready(function(){
  $('.alert').hide();
  $('#O').hide();
  $("#reset").on("click", function(){
  location.reload();
  turn = 0;
  letter1 = "";
  letter2 = "";
  letter3 = "";
  letter4 = "";
  letter5 = "";
  letter6 = "";
  letter7 = "";
  letter8 = "";
  letter9 = "";
  $('.alert').hide();
  });
});
    
    
    function playGame(letter){
        if(turn == 8){
          $('.alert').show();
          $('.alert').html('Tie Game');          
        }else if(letter4 === letter && letter5 === letter && letter6 === letter){
             $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);    
        }else if(letter7 === letter && letter8 === letter && letter9 === letter){
             $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);
        }else if(letter1 === letter && letter4 === letter && letter7 === letter){
             $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);
        }else if(letter2 === letter && letter5 === letter && letter8 === letter){
             $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);
        }else if(letter3 === letter && letter6 === letter && letter9 === letter){
             $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);
        }else if(letter1 === letter && letter5 === letter && letter9 === letter){
             $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);
        }else if(letter3 === letter && letter5 === letter && letter7 === letter){
          $('.alert').show();
          $('.alert').html(`Player ${letter} Wins!`);
        }else if (letter1 === letter && letter2 === letter && letter3 === letter) {
          $('.alert').show();
            $('.alert').html(`Player ${letter} Wins!`);
        }        
    }

function turnCard(card){
  if(turn % 2 == 0){
    card.classList.toggle('is-flipped');
    document.getElementById('not').innerHTML= 'X';
    letter1 = "X";
    playGame('X');
    $('#O').show();
    $('#X').hide();
  }else{
    card.classList.toggle('is-flipped');
    letter1 = "O";
    playGame('O');
    $('#X').show();
    $('#O').hide();
  }
  turn += 1;
  console.log(turn);
};
