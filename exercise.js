/*
Brocks
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=800px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.
PacMan1 is mouth open facing right
PacMan2 is mouth closed facing right
PacMan3 is mouth open facing left
PacMan4 is mouth closed facing left 
*/

//made a new variable 
var exercise = {}; //start the variable titled exercise with an empty set 
exercise.location = 0;
exercise.flag = 0; // 0 = mouth open  1 = mouth shut, so are we adding a property called flag? 
                   //or is a flag a variable that changes based on true/false  
                   //how to change flag  
//make another new variable
exercise.flag_increment = 1; 

exercise.increment = 20; // pixels to move either + or -; think another way is dx
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    //PacMan is indentified in the run code as the PacMan1.png
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
}
//now to identify the components of the function
//going to need a timer in this one  
exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    exercise.location += exercise.increment;
     // now set image position using img1.style.left
    exercise.img1.style.left = exercise.location + 'px';
    console.log(exercise.flag);
    // remember images positions are "xxx.px" 
   // if(exercise.flag==1){exercise.flag -= exercise.flag_increment;};
    //if(exercise.flag==0){exercise.flag += exercise.flag_increment;};
    }
exercise.chooseImage = function() {
    // choose between all 4 images 
    if ((exercise.increment > 0) && (exercise.flag===1)){document.getElementById('PacMan').src= 'PacMan1.png'; 
                                                        exercise.flag = 0;
    }
    else if ((exercise.increment > 0) && (exercise.flag===0)){document.getElementById('PacMan').src= 'PacMan2.png';
                                                            exercise.flag=1; 
        };
    if ((exercise.increment < 0) && (exercise.flag===1)){document.getElementById('PacMan').src= 'PacMan3.png';
                                                        exercise.flag = 0;
        }
    else if ((exercise.increment < 0) && (exercise.flag===0)){document.getElementById('PacMan').src= 'PacMan4.png';
                                                        exercise.flag += exercise.flag_increment;
        };
    }
exercise.checkWallCollision = function() {
    if((exercise.location>580)||(exercise.location<20)){
        exercise.increment = -exercise.increment;
    };
}
    // reset the direction of motion if wall is hit
    // you need to take into account image width