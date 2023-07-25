export const min = (a, b, c) => {
  if (a>b && b>c){
    return c;
  }else if(b>a && c>a){
    return a;
  }else if(c>a && a>b){
  return b;}
  else{
    return console.log('are equal');
  }


}
