# project_etch_a_sketch_2.0

Visit site at https://bigherve.github.io/project_etch_a_sketch_2.0/

Understand:
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t make them by hand with copy and pasting in your HTML file! Put your grid squares inside another “container” div which can go directly in your HTML. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a pixelated trail through your grid like a pen would. Set up event listeners for either of those events. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before e.g. 960px wide so that you’ve got a new sketch pad. Set the limit for the user input to a maximum of 100. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

Extra
Have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

Plan of attack:
The user will be able to change the size of of the grid by putting in a number from 1 to 100 this will be limited to 100 for resource and performance reasons.We will get the users number with a input element via JavaScript.
My desired output is so that the grid divs change color when the mouse passes over them, leaving a pixelated trail through the grid like a pen would.

Pseudocode:
