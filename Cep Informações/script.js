const forms = document.querySelector('#endereço')
const btn = document.querySelector('.btn')
const resultado = document.querySelector('.resultado')

const arrayEvents = ['click']

function initCep() {
  const cep = endereço.cep.value
  const input = endereço.cep
  resultado.innerText = ''
  if (cep.length < 8) {
    input.classList.add('erro')
    input.nextElementSibling.innerText = 'cep deve conter 8 digitos'
  }
  else if (cep.length > 8){
    input.classList.add('erro')
    input.nextElementSibling.innerText = 'cep deve conter 8 digitos'
  } else {
    input.classList.remove('erro')
    input.nextElementSibling.innerText = ''
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(r => r.json())
      .then(body => {
        console.log(body)
        const span = document.createElement('span')
        Object.keys(body).forEach(key => {
          resultado.innerHTML += '<span>' + `${key}- ${body[key]}` + '</span>'
        })
      })
  }
}
arrayEvents.forEach(userEvent => {
  btn.addEventListener(userEvent, initCep)
})
