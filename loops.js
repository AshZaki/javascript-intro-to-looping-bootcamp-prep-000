function forLoop(arr){
  
  for (let i = 0; i < 25; i++){
    if (i===0){
      arr.push("I am " + i + " strange loop.");
    }
    else if (i ===1){
      arr.push("I am 1 strange loop.");
    }
    else {
      arr.push("I am " + i + " strange loops.");
    }
  }
  return arr;
}

function whileLoop(num){
  while (num == n){
    if (n > 0){
      console.log(--num);
    }
    else if (n === 0){
      console.log("done");
    }
  }
  return num;
}
