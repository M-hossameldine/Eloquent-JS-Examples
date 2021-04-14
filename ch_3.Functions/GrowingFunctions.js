// Growing Functions
/* 
  We want to write a program that prints two numbers: the numbers of cowsand chickens on a farm, with the words Cows and Chickens afterthem and zerospadded before both numbers so that they are always three digitslong.
*/
// 1st Approach
function printFarmInventory(chickens, cows){
  let chickenString = String(chickens);
  console.log(chickenString);
  while(chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }

  let cowString = String(cows);
  while(cowString.length < 3) {
    cowString = '0' + cowString;
  } 
  console.log(chickenString + ' Chickens');
  console.log(cowString + ' Cows');
}

printFarmInventory(10 , 4);

// 2nd Approach
function farmInventory2(cows, chicken, pigs){
  printZeroPaddWithLabel(cows, 'cows');
  printZeroPaddWithLabel(chicken, 'Chicken');
  printZeroPaddWithLabel(pigs, 'Pigs');
}

function printZeroPaddWithLabel(number, label){
  numberString = String(number);
  while(numberString.length < 3) {
    numberString = '0' + numberString;
  }
  console.log(`${numberString} ${label}`);
}

farmInventory2(6, 100, 50);

// 3rd Approach

function farmInventory3(cows, chickens, pigs){
  console.log(`${zeroPadd(cows)} 'Cows'`);
  console.log(`${zeroPadd(chickens)} 'Chickens`);
  console.log(`${}`);
}

function zeroPadd(number){
  let numberString = String(number);
  while(numberString.length < length) {
    numberString = '0' + numberString;
  }
  return numberString;
}

farmInventory3(50, 8, 160);
