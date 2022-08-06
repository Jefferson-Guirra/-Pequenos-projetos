export default class Horas {
 constructor(date){
  this.date = date
 }
 get data(){
  return this.date
 }

 get hour(){
  const hour = this.date.getHours()
  return hour
 }
 get minutes(){
  const minutes = this.date.getMinutes()
  return minutes
 }

 get seconds (){
  const seconds =this.date.getSeconds()
  return seconds
 }

}
