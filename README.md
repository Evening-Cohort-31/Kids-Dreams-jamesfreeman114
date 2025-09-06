# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

The code to handle this event listener is found in the Kids.js module. The algorithm for this click event first checks if the item that was clicked on is a child by using an "if" statement to find the data attribute "type" of item that was clicked on. If the data attribute for "type" is exactly equal to "child" then it will move on to the next step which is to declare a new variable called "childId" which store the data attribute for "id" from the item that was clicked on. Then, by using a For..of loop to iterate over the array of children imported from the database.js module, the code will find which child from the array matches the child that was clicked on by comparing the id property of each child object to the "childId" variable. Since "childId" is a string, it is converted to a number using the parseInt() method. Once a match is found, a window alert will then be displayed containing a message with the child's name and wish pulled from the same child object whose id was a match the click event target. 




2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

The reason the findCelebrityMatch() function needs to be invoked inside the for..of loop is because a separate html string needs to be generated for each child in the array. The function takes a single child object as its first parameter and compares it to the entire array of celebrities as its second parameter to find the match. Invoking the function inside the for..of loop is the best way to target each individual child object in the array.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

The same logic from the Kids.js event listener is used to find the name of the sport for each celebrity and display it as a window alert. First the code checks if the item clicked on was a celebrity using the data attribute for "type." Then it pulls the html data attribute for "id" and uses a for..of loop to iterate over the entire array of celebrities to find a match. Once it finds a match, the name of the sport is displayed in the window alert using string interpolation to pull the sport property from the same celebrity object whose id property was a match with what was clicked on. 

4. Can you describe, in detail, the algorithm that is in the `main` module?
 
 The algorithm for the main module is as follows: First, all the functions from the other modules are imported into the main module. Then a variable named mainContainer is declared to dynamically add HTML to the index.html file by targeting the portion of the original html code with the id of "container." A new variable called applicationHTML is then declared which is a string of html code. Within this html string the functions Kids(), Celebrities(), and Pairings() are invoked to pull the html created in each module and put it in its respective place. Finally, the inner html for mainContainer is replaced with the entire string that was created in applicationHTML which is what will be ultimately displayed in the browser. 