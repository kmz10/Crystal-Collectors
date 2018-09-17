$(function () {
    

    
    var begin = true;
    var reset = false; 
    var wins = 0; 
    var losses = 0; 
    var score_alert = ""; 
    var minNumber_Total = 19; 
    var maxNumber_Total = 120; 
    var minNumber_Button = 1; 
    var maxNumber_Button = 12; 
   
    var randomnumber;  

    var diamond_1;  
    var diamond_2; 
    var diamond_3;
    var diamond_4;
    var Sum; 

 



    function resetValues() {
        randomnumber = Math.floor(Math.random() * (maxNumber_Total - minNumber_Total + 1) + minNumber_Total);
        diamond_1 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        diamond_2 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        diamond_3 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        diamond_4 = Math.floor(Math.random() * (maxNumber_Button - minNumber_Button + 1) + minNumber_Button);
        Sum = 0;
        $(".Score").html(randomnumber);
        $("#Sum").html(Sum);
    }
 
    
    
   
   
    $("#Score").html(randomnumber);
 



    $("#diamond_1, #diamond_2, #diamond_3, #diamond_4").click(function () {
    
                if ($(this).prop('id') == 'Diamond_1') {
                    Sum = Sum + diamond_1; 
                }
                else if ($(this).prop('id') == 'Diamond_2') {
                    Sum = Sum + diamond_2; 
                }
                else if ($(this).prop('id') == 'Diamond_3') {
                    Sum = Sum + diamond_3; 
                }
                else if ($(this).prop('id') == 'Diamond_4') {
                    Sum = Sum + diamond_4; 
                }


        
                $("#Sum").html(Sum);

        if (Sum == randomnumber) {
           
            wins += 1;
            $("#wins").html(wins); 
            $("#score_alert").html("<p>You Won!</p>"); 
            resetValues(); 
        }
        else if (Sum > randomnumber) {

            losses += 1;
            $("#loses").html(losses);
            $("#score_alert").html("<p>You Lost!</p>");
            resetValues(); 

        }

        });
    

});