const tempo = document.querySelector('[data-tempo]')
const inicio = document.querySelector('[data-inicio]')
const pause = document.querySelector('[data-pause]')
inicio.addEventListener('click',initCronometro)
pause.addEventListener('click',pauseCronometro)
pause.addEventListener('dblclick',resetTempo)



let i = 0
let loop
function initCronometro(){
   loop = setInterval(()=>{
    tempo.innerText = i++
    
  },100) 
  inicio.setAttribute('disabled','')
}
function pauseCronometro () {
  clearInterval(loop)
  inicio.removeAttribute('disabled',)

}

function resetTempo(){
  clearInterval(loop)
  tempo.innerText = 0
  i=0
}






