export default class validarCpf{
  constructor(element){
    this.element = element
  }
  /*------------------Limpando(07444444505)-------------------*/
  limpar(cpf){
    return cpf.replace(/\D/g,'')
  }
  /*------------------------Formatando-Cpf(074.444.445-05)*/
  construir(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,`$1.$2.$3-$4`)
  }
  /*--------------retornando CPF Formatado------------------------*/
  formatar(cpf){
    const cpfLimpo= this.limpar(cpf)
    return this.construir(cpfLimpo)
  }
  /*-----------------------Validando-CPF-------------------------------------*/
  validar(cpf){
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
 
    return (matchCpf && matchCpf[0]===cpf)
  }
  /*------------------CLASS.ADD A PARTIR DA VALIDAÇÃO--------------------------*/
  validarNaMudança(cpfElement){
    if(this.validar(cpfElement.value)){
      cpfElement.value = this.formatar(cpfElement.value)
      cpfElement.classList.remove('erro')
      cpfElement.classList.add('valido')
      cpfElement.nextElementSibling.classList.remove('ativo')
    }else{
      cpfElement.classList.add('erro')
      cpfElement.classList.remove('valido')
      cpfElement.nextElementSibling.classList.add('ativo')
    }
   
    
  }
  /*------------------------MENSAGEM DE ERRO--------------------------------------*/
  adicionarErroSpan(){
    const erro= document.createElement('span')
    erro.classList.add('erro-text')
    erro.innerText='CPF inválido'
    this.element.parentElement.insertBefore(erro,this.element.nextElementSibling)
  }
  /*---------------------ADICIONANDO O EVENTO AO MUDAR-----------------------------*/
  adicionarEvent(){
    this.element.addEventListener('change',()=>{
      this.validarNaMudança(this.element)
    })
    
  }
/*------------------------INICIAR FUNÇÕES------------------------------*/
  iniciar(){
    this.adicionarEvent()
    this.adicionarErroSpan()
    return this
  }
}
