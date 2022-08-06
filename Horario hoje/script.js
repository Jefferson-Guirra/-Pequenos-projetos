import Horas from './hour.js'
const result = document.querySelector('.result')
const formato = document.querySelectorAll('.format')
const dateFormat = document.querySelectorAll('.dateFormat')




setInterval(()=>{
  const date = new Date()
  const relogio = new Horas(date)
  formato[0].innerHTML = relogio.hour
  formato[1].innerHTML = relogio.minutes
  if (relogio.seconds<10){
    formato[2].innerHTML = '0' + relogio.seconds
    console.log('ola')
  }else{
    formato[2].innerHTML = relogio.seconds
  }
  
  
  dateFormat[0].innerHTML= date.getDate()
  dateFormat[1].innerHTML= date.getMonth()
  dateFormat[2].innerHTML= date.getFullYear()
 

},1000)