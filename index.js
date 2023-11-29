function scuberGreetingForFeet(ride){
  // Write your code here!
    if (ride <= 400) {
      return 'This one is on me!';
    } else if (ride > 400 && ride < 2000) {
      return 'That will be twenty bucks.';
    } else if (ride >= 2000 && ride <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else if (ride > 2500) {
      return 'No can do.';
    }
  }

function ternaryCheckCity(city) {
// Write your code here!
 return city ? 'Ok, sounds good.' : 'No go.' ;
}
//condition ? exprIfTrue : exprIfFalse
//false is null, undefined, false, NaN, 0, -0, 0n, "", object
//How to trick ternary into a false expression? Bang did not work 

function switchOnCharmFromTip(generous){
// Write your code here!
  switch(generous) {
    case 'generous':
      return "Thank you so much.";
      // break;
    case 'not as generous':
      return "Thank you.";
      // break;
    default:
      return "Bye."
  } 
}