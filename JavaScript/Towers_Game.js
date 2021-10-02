// start the game
    debugger
$(document).ready(function () {
        $(".play",).click(function () {   
            $(".startgame").slideDown(); 
        });
        var move=0;     
            //var of tower and some props
            var tower = [ $('.tower._1'), $('.tower._2'), $('.tower._3') ],
                disc  = [];// the circles inside the tower
                
            tower[0].empty();// tower 1
            tower[1].empty();// tower 2
            tower[2].empty();// tower 3
        
            $(".won").slideUp();// win display in slideup function (hide it)
            for (var i = 1; i <= 4; i++) {// create the discs that we want to move
                tower[0].append('<div class="disc size' + i + '"></div>');
            }

           
           // check if win     
            if ((tower[1].children().length > 3) || (tower[2].children().length > 3)) { 
              if (localStorage.getItem('score'+localStorage.getItem('loginnednumber')) > move) {
                    localStorage.setItem('score'+localStorage.getItem('loginnednumber'),move);
                }
                $('.won').slideDown();
            }
            //on click any tower
            $('.tower').click(function () {
                //if the you  want to move him is already up to move?
                if ($(this).children().first().hasClass('upToMove')) {
                    $(this).children().first().removeClass('upToMove');//if yes remove it the uptomove
                } else {
                    if ($(this).siblings().children().hasClass('upToMove')) {//if any of tower have siblings children up to move
                      move++; //up the move
                      $(".startgame").slideUp(); 
                      $(".score").text("Moves :"+ move); // display the score
                    } else {
                        $(this).children().first().addClass('upToMove');// else if no so add to him up to move
                    }
                }
                if ($(this).siblings().children().find('.upToMove')) {// search to find uptomove if found join
                    if ($(this).children().first().width() < $(this).siblings().children('.upToMove').width()) {
                        move--;
                        $('section').prepend("<p></p>");
                        $('section p').text("You Can't Put a Big Disc Up On a smaller one.").delay(4000).fadeOut();
                    } else {
                        $(this).prepend($(this).siblings().children('.upToMove').removeClass('upToMove'));
                    }
                }
    
            });
            $('.disc').each(function () {// function to check each disc have bottom next of all *25 so first will be 0 next 25 next 50 next 75
                $(this).css({
                    bottom : $(this).nextAll().length * 25 
                });
            });
    debugger
         $(window).click(function () {// add 25 px to the window to can add the disc as 25 px 
                $('.disc').each(function () {
                    $(this).css({
                        bottom : $(this).nextAll().length * 25            
                    });


                    if ((tower[1].children().length > 3) || (tower[2].children().length > 3)) { // loop to check winner if was the length in same of request length so win 
                        if (localStorage.getItem('score'+parseInt( localStorage.getItem('loginnednumber'))) > move) {
                            localStorage.removeItem('score'+parseInt( localStorage.getItem('loginnednumber')));
                            localStorage.setItem('score'+parseInt( localStorage.getItem('loginnednumber')),move);
                        }
                        $('.won').slideDown();
                    }
                });
            });
    });