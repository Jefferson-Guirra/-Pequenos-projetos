const forms = document.querySelector('#endereço')
const btn = document.querySelector('.btn')
const resultado = document.querySelector('.resultado')

const arrayEvents = ['click']


function initCep(){
  const cep = endereço.cep.value 
  resultado.innerText = ''
  if(cep.length<8){
    input.classList.add('erro')
    input.nextElementSibling.innerText ='cep deve conter 8 digitos'
  }else{
    const input = endereço.cep
    input.classList.remove('erro')
    input.nextElementSibling.innerText =''
    const doc = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    doc.then(r=>r.json())
    .then(body=>{
      const span = document.createElement('span')
      Object.keys(body).forEach(key=>{
        resultado.innerHTML += '<span>' +`${key}- ${body[key]}` + '</span>'
      })
      
      
    })

  }
}
arrayEvents.forEach(userEvent=>{
  btn.addEventListener(userEvent,initCep)
})

