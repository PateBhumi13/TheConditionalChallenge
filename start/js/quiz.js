/* 
  1. Store correct answers
   - When quiz begins, no answers are correct

*/
correct = 0;

// 2. Store the rank of a player
rank = "Not known";

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt('What programming language that you are leaning?');
if(answer1.toUpperCase()=='JAVASCRIPT')
  correct = correct + 1;

  answer2 = prompt('What programming language for web content page?');
  if(answer2.toUpperCase()=='HTML')
    correct = correct + 1;

answer3 = prompt('What language is use for styling web?');
if(answer3.toUpperCase()=='CSS')
  correct = correct + 1;


answer4 = prompt('What is he name of the college you studing?');
  if(answer4.toUpperCase()=='DOUGLAS')
    correct = correct + 1;

    
answer5 = prompt('What is the name of the city of your college?');
if(answer5.toUpperCase()=='NEW WESTMINSTER')
  correct = correct + 1;

document.querySelector('main').innerHTML = 'Your socre is: ' + correct


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if(correct==5)
   rank="Gold" 
else if(correct>=3)
  rank="Silver"
else if(correct>=1)
  rank = "Bronze"
else
  rank = "No crown"


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = "Your score is "+ correct +" out of 5 " + "<br>You rank is: " + rank