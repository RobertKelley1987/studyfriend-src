# studyfriend
studyfriend is a CRUD app for editing and studying groups of flashcards. 
Flashcards are grouped together by category, so a user might have one group
of cards for Algebra, one for Accounting, another for Geography etc...
The app was created using React and Express.

## A flashcard app... why?
I built this project so that I can make and study flashcards for the CompTIA+ 
exam. I often need flashcards to prepare for college-type exams, and making 
them myself helps me learn the material in a way that is more interactive than 
reading alone.

I also felt motivated to finish this project as a portfolio app, and as an 
opportunity to gain more experience with React, Express and JavaScript in 
general.  

## Any cool features?
Alongside the basic CRUD for categories and flashcards, users can enter "study 
mode" for each category. This feature attempts to recreate the experience of 
studying a stack of flashcards. The user moves through a category's cards one 
by one, deciding whether to mark each card as finished or return it to the 
bottom of the category stack to study again.

The app also features user authorization by password. I was hoping to add a 
password recovery feature, but at this point I need to move on to other 
projects.  

## What did you learn?
I feel like I am getting more comfortable with React and Express after 
finishing this project. I learned how to use custom hooks, and I also learned
how to deploy a full stack application using these technologies.

## Did you make this all by yourself?
I had a first version of this app running on 2 separate PaaS providers: Netlify 
and Cyclic, but I ran into an endless, complicated nightmare of CORS 
configuration issues involving express-session. This video from the Devistry 
youtube channel solved my issue by serving my app from one project folder, and 
I am forever grateful: https://www.youtube.com/watch?v=4pUBO31nkpk