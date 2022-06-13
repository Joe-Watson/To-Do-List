export default  getDate;
function getDate(){
const today=new Date()
//date formate
const options={
  month:'long',
  weekday:'long',
  day:'numeric'
   
}
return today.toLocaleString("en-US",options)
}