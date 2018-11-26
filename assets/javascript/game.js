$(document).ready(function() {

    
        var sum = 0
        var randomNum = 0
        var wins = 0
        var losses = 0 
        var minNumber_Total = 19; 
        var maxNumber_Total = 120;
        var minNumber_Button = 1; 
        var maxNumber_Button = 12;
        var diamond1 = 0
        var diamond2 = 0
        var diamond3 = 0
        var diamond4 = 0
        
        var gameStart = function(){

        diamond1 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        diamond2 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        diamond3 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        diamond4 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        
        randomNum = Math.floor(Math.random() * (maxNumber_Total - minNumber_Total + 1) + minNumber_Total);
       
            $("#randomNum").text(randomNum);

            userScore = 0
            $("#sum").text(" " + sum);



            console.log(diamond1);
            console.log(diamond2);
            console.log(diamond3);
            console.log(diamond4);
            console.log(randomNum);

        };

         gameStart();

        $("#diamond1").click(function(){
            sum = sum + diamond1;
            $("#sum").text(" " + sum);
            compare();
        });

        $("#diamond2").click(function(){
            sum = sum + diamond2;
            $("#sum").text(" " + sum);
            compare();
        });

        $("#diamond3").click(function(){
            sum = sum + diamond3;
            $("#sum").text(" " + sum);
            compare();
        });

        $("#diamond4").click(function(){
            sum = sum + diamond4;
            $("#sum").text(" " + sum);
            compare();
        });

        
        var compare = function(){
            if(sum > randomNum){
                alert("Sorry, you lost.");
                losses = losses + 1
                $("#losses").text(losses);
                sum = 0;

              gameStart();
                
            }
            if (sum === randomNum){
                alert("WINNER!");
                wins = wins + 1
                $("#wins").text(wins);
                sum = 0;
                gameStart();
            }	
        };


    });