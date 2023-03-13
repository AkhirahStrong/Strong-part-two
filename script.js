

let playername = prompt("Welcome to GC mini golf! What is your name?");
let holeCount = prompt("Hello " + playername + "! Would you like to play 3 or 6 holes today?" );
let total = 0;
let next = 0;
for (let i = 0; i < holeCount; i++){
    next += 1;
    let parCount = Number(prompt("How many putts for hole " + next + "? (par is 3)" ));
    total += parCount;
}

//console.log( total);
//Or isn't working
let neg3Amount = total - 9;
let pos3Amount = total % 9;
let neg6Amount = total - 18;
let pos6Amount = total % 18;

if(total < 9 ){
    alert("Great job, " +playername+ "! Your total par was: " + neg3Amount + "."  );
}else if(total > 9 ){
    alert("Nice try, " +playername+ "! Your total par was: +" + pos3Amount + ".");
}else if (total === 9){
    alert("Good game, " +playername+ "! Your total par was: 0.");
}else if (total < 18){
     alert(`Great job, ${playername}! Your total par was: ${neg6Amount}.`);
 }else if(total > 18){
    alert(`Nice try, ${playername}! Your total par was: +${pos6Amount}.`);
}else if(total === 18){
    alert("Good game, " +playername+ "! Your total par was: 0.");
}