export default function getCal({gender, weight, height, age, activitylevel}) {
  if(gender == '' || weight == '' || height == '' || age == '' || activitylevel == '') {
    alert('Please fill out both forms to calculate your caloric intake');
} else {
  if (gender == "male")
  //English-BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
  //Metric-BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )
  {
    let val1 = 13.7 * weight;
    let val2 = 5 * height;
    let val3 = 6.8 * age;
    let result = 66 + val1 + val2 - val3;
    return result * activitylevel;
  }
  if (gender == "female")
  //English-Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years)
  //Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
  {
    let val1 = 9.6 * weight;
    let val2 = 1.8 * height;
    let val3 = 4.7 * age;
    let result = 655 + val1 + val2 - val3;
    return result * activitylevel;
  }
}
}
