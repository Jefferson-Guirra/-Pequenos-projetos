import validarCpf from './validar-cpf.js'
const cpf = document.querySelector('#cpf')
const validaCpf = new validarCpf(cpf).iniciar()
console.log(validaCpf)
