// Code your solutions in this file
function writeCards(array, event){
  const thankYouMessage = [];
  let thankYou ;
  for (let i = 0; i < array.length; i++){
<<<<<<< HEAD
       thankYou = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
      thankYouMessage.push(thankYou);
=======
       thankYou = `Thank you, ${array[i]} for the wonderful ${event} gift!`;
      thankYouMessage.push(thankYou);
      console.log(thankYou);
>>>>>>> db67f566d246ed01392e3c019fc99c6efd10d806
  }
  return thankYouMessage;
  
}


function countDown(countDown){
  
  while(countDown >= 0){
    console.log(countDown);
    countDown--;
  }
  
}


<<<<<<< HEAD
writeCards(["Lisa", "Kaitlin", "Jan"], 'surprise');
=======
writeCards(["ahmad,", "dovakin,", "akatosh,", "annie,"], 'surprise');
>>>>>>> db67f566d246ed01392e3c019fc99c6efd10d806
countDown(10);
