export const positiveElements = (arr) => {
  let temp=[];
  for(let i=0; i<arr.length;i++){
    if(arr[i]>=0){
      temp.push (arr[i]);
    }
  }
  return temp;
}