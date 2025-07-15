const INPUT_EMAIL = document.getElementById('email');
const INPUT_SENHA = document.getElementById('senha');

const ERRO_EMAIL = document.getElementById('erro_email');
const ERRO_SENHA = document.getElementById('erro_senha');

function esconderErroEmail() {
    ERRO_EMAIL.style.display = 'none';
}

function esconderErroSenha() {
    if (INPUT_SENHA.value.length >= 8) {
        INPUT_SENHA.classList.remove('is-invalid');
        INPUT_SENHA.classList.add('is-valid');
    } else {
        INPUT_SENHA.classList.add('is-invalid');
        INPUT_SENHA.classList.remove('is-valid');
    }

    ERRO_SENHA.style.display = 'none';
}

function enviar() {
    //impedir o envio do form    

    if ( INPUT_EMAIL.value === '' ) {
        ERRO_EMAIL.style.display = 'block';
        event.preventDefault();
    }

    if ( INPUT_SENHA.value === '' || INPUT_SENHA.value.length < 8) {
        ERRO_SENHA.style.display = 'block';
        event.preventDefault();
    }
    else{
        
    }


}
function limparCampos(){
    const formulario = document.getElementById("formularioCliente");
    formulario.reset();
}