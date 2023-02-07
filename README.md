# project_etch_a_sketch_2.0

Visit site at: https://bigherve.github.io/project_etch_a_sketch_2.0/

Understand:
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t make them by hand with copy and pasting in your HTML file! Put your grid squares inside another “container” div which can go directly in your HTML. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a pixelated trail through your grid like a pen would. Set up event listeners for either of those events. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before e.g. 960px wide so that you’ve got a new sketch pad. Set the limit for the user input to a maximum of 100. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

Plan of attack:
The user will be able to change the size of of the grid by putting in a number from 1 to 100 this will be limited to 100 for resource and performance reasons.We will get the users number with a input element via JavaScript.
My desired output is so that the grid divs change color when the mouse passes over them, leaving a pixelated trail through the grid like a pen would.

Pseudocode:
first off make 3 variables that are connected to their respective ids via query selector one for the reset button, one for the container and one for the input element. Then create a function that will make our grid it will need a for loop that loops 265 times and creates the divs, adds class names and appends the new divs to the container on each iteration to make a 16 x 16 grid. Make a function to change the size of the grid it will change the containers text content to an empty string and set the grid-template rows and columns to the inputs value also a similar for loop to that of the make grid function. Next we make a function to reset the grid we'll set the containers and the inputs text content to an empty string and the inputs value to a empty string, then set the grid-template rows and columns to a default value. Set up a event listener so that the grid divs change color when the mouse passes over them, leaving a pixelated trail through your grid. Add a button to the top of the screen that will reset the grid via event listener. We can get the users number with a input field using the make grid and change grid size functions to change the grids size as you please. Set the limit for the users input to a maximum of 100. Add a function that on each pass through with the mouse over the grid changes the divs to completely random RGB values.

Rainbow icons created by Freepik - Flaticon: https://www.flaticon.com/free-icons/rainbow"
