var args = process.argv;

function diceRoller(number){
  var string = 'Rolled' + number + 'Dice: ';
  for(var i = 0; i < number; i++){
    string += Math.floor(Math.random() * 6 + 1);
    if(i !== number - 1){
      string += ', ';
    }
  }
  return string;
}

console.log(diceRoller(args[2]));