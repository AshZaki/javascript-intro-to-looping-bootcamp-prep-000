for (let i = 0;i < 25; i++){
  if (i==1){
    console.log('I am 1 strange loop.');
    return i;
  }
  else (i>1){
    console.log('I am ${i} strange loops');
    return i++;
  }
}