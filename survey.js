const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = [];

rl.question('What is your name? ',(answer1) => {
  answer.push(answer1);
  rl.question('What\'s an activity you like doing? ',(answer2) => {
    answer.push(answer2);
    rl.question('What do you listen to while doing that? ',(answer3) =>{
      answer.push(answer3);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ",(answer4) => {
        answer.push(answer4);
        rl.question("What's your favourite thing to eat for that meal? ",(answer5) => {
          answer.push(answer5);
          rl.question("Which sport is your absolute favourite? ",(answer6) =>{
            answer.push(answer6);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at ",(answer7) => {
              answer.push(answer7);
              console.log(`${answer[0]} loves listening to ${answer[2]} while ${answer[1]}, devouring ${answer[4]} for ${answer[3]}, prefers ${answer[5]} over any other sport, and is amazing at ${answer[6]}.`);
              rl.close();
            })
          })
        })
      })
    })
   
  })
})
