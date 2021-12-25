let maximum=parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number!!!!!"));
}
const targetNum=Math.floor(Math.random()*maximum)+1;
let guess=prompt("Enter your guess");
let attempts=1;
while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    attempts++;
    if(guess>targetNum){
        guess=prompt("Try something smaller");
    }
    else{
        guess=prompt("Try something bigger");
    }
}
if(guess==='q'){
    console.log("OK U QUIT");
}
else{
    console.log(`Cograts!!!.It took you ${attempts} attempts`);
}