$(document).ready(function() {

var myWords = ["puppy", "elephant", "octopus", "seal", "cat"];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getWord(){
	var index = Math.floor(Math.random() * myWords.length);
	console.log(myWords[index]);
	return myWords[index];
}

function printBlankSpaces(word){
	for(i = 0; i < word.length; i++){
		var myCharacter = $("<div>");
		myCharacter.attr("data-letter",word[i]);
		myCharacter.addClass("myCharacter");
		$("#display").append(myCharacter);
	}
}

var guesses = 5;
var counter = 0;

function checkLetters(myChar){
	//console.log("hey " + myChar);
	myChar = myChar.toLowerCase();
	var myLetterElements = document.getElementsByClassName("myCharacter");
	//console.log(myLetterElements);
	var rightCounter = 0;
	for(i = 0; i < myLetterElements.length; i++){
		var letter = myLetterElements[i];
		console.log($(letter).attr("data-letter"));
		console.log("hello " + myChar);
		if($(letter).attr("data-letter") === myChar){
			console.log("yo");
			$(letter).html(myChar);
			counter ++;
			rightCounter ++;
			if(counter === word.length){
				$("button").attr("disabled", true);
				$("button").css("background-color", "black");
				setTimeout(function(){
					alert("you won");
				},50);
			}
		}
	}
	if(rightCounter === 0){
		guesses --;
		if(guesses === 0){
			$.each(myLetterElements, function(index,value){
				$(value).html($(value).attr("data-letter"));
			});
			$("button").attr("disabled", true);
			$("button").css("background-color", "black");
			setTimeout(function(){
				alert("you lost");
			},50);
		}
	}
}

var word = getWord();
printBlankSpaces(word);

for(i=0; i<letters.length; i++) {
    var letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters[i]);
    //console.log(letterBtn.data());
    letterBtn.html(letters[i]);
    $("#buttons").append(letterBtn);
}

$(".letter-button").on("click", function(){
    // var fridgeMagnet = $("<div>");
    // fridgeMagnet.addClass("letter fridge-color");
    // $("#display").append(fridgeMagnet);
    var myId = $(this).attr("data-letter");
    //console.log(myId);
    $(this).attr("disabled",true);
    $(this).css("background-color","black");
    checkLetters(myId);
  });

});