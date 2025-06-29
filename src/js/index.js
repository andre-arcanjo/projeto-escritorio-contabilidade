const btnValidacao = document.getElementById('btn-validacao');
const inputs = document.querySelectorAll('.input');
const mensagemPreenchimento = document.querySelector('.preenchimento');
const mensagemAgradecimento = document.querySelector('.agradecimento');

btnValidacao.addEventListener('click', () => {
    
    let formularioValidado = true
    
    inputs.forEach((input) => {
        if(input.value === ""){
            formularioValidado = false
            input.classList.add('input-nao-preenchido');
            event.preventDefault();
        }else{
            input.classList.remove('input-nao-preenchido');
            event.preventDefault();
        }
    })

    if(formularioValidado){
        mensagemAgradecimento.classList.add('agradecimento-mostrar');
        mensagemPreenchimento.classList.remove('preenchimento-mostrar'); 
    }else{
        mensagemPreenchimento.classList.add('preenchimento-mostrar');
        mensagemAgradecimento.classList.remove('agradecimento-mostrar');
    }
})











