export const getBMICategory = (bmi) => {
  if (bmi <= 18.5){
    return 'Under weight';
  } else if(bmi >18.5 && bmi <=25 ){
    return 'Normal weight';
  }else 
  return 'Obesity';
}