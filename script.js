var numSquares = 6;
var colours = [];
var pickedColour;

var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    for( var i = 0; i < modeButtons.length ; i++){
            modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
            reset();
    
            //figure out no of squares
            //pick new colours
            //pick a colour
            //update page to reflect changes
        });
    }
    for(var i=0;i<squares.length;i++)
    {   //add initial colours to the squares
    
    //add click listeners to squares
    squares[i].addEventListener("click",function(){

            selectedColour = this.style.backgroundColor;
            
            if( selectedColour === pickedColour){
                resetButton.textContent = "Play again?";
                messageDisplay.textContent = "Correct!";
                changeColours(selectedColour);
                h1.style.backgroundColor = pickedColour;
            
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
        }
    });
}
reset();

}



function reset()
{
    colours = generateRandomColours(numSquares);
    //pick a new random colour from the array of generated colours
     pickedColour = pickColour();
    //change colourDisplay to match the picked colour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    //change the colours of the squares
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colours[i];
        if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click",function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colours = generateRandomColours(numSquares);
//     pickedColour = pickColour();
//     colourDisplay.textContent = pickedColour;
//     for( var i=0; i<squares.length; i++)
//     {
//         if(colours[i]){
//             squares[i].style.backgroundColor = colours[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colours = generateRandomColours(numSquares);
//     pickedColour = pickColour();
//     colourDisplay.textContent = pickedColour;
//     for( var i=0; i<squares.length; i++)
//     {
        
//             squares[i].style.backgroundColor = colours[i];
      
//             squares[i].style.display = "block";
        
//     }
// });

resetButton.addEventListener("click",function(){
    reset();
});
colourDisplay.textContent = pickedColour;



function changeColours(colour){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colour;

    }
}
function pickColour()
{
   var random =  Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColour());
    }


    return arr;
}

function randomColour(){
    //pick a red from 0 -255
    //pick a green from 0 -255
    //pick a blue from 0 -255

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
