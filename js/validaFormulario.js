const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const submitButton = document.getElementById("enviar");
const erroMessage = document.getElementById(".msg");
const okMessage = document.getElementById(".msgOk");
const textoMessage = document.getElementById("textoMessage");



form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkForm();
    nameInput.value ="";
    emailInput.value = "";
    assuntoInput.value = "";
    textoMessage.value = "";

})

function checkInputusername(){
    const nameValue = nome.value;

    if(nameValue === ""){
        errorInput(nome, "Preencha o campo vazio!")
    }else{
        const formItem = nome.parentElement;
        formItem.className = "form-group";
    }
}

function checkInputemail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Preencha com email válido!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-group";
    }
}
function checkInputassunto(){
    const assuntolValue = assunto.value;

    if(assuntolValue === ""){
        errorInput(assunto, "Preencha o campo vazio!")
    }else{
        const formItem = assunto.parentElement;
        formItem.className = "form-group";
    }
}
function checkMessage(){
    const messageValue = textoMessage.value;

    if(messageValue === ""){
        errorInput(textoMessage, "Preencha o campo vazio!")
    }else{
        const formItem = textoMessage.parentElement;
        formItem.className = "form-group";
    }
}
function checkForm(){

    checkInputusername();
    checkInputemail();
    checkInputassunto();
    checkMessage();

    const formItens = form.querySelectorAll(".form-group")

    const validado = [...formItens].every((item)=>{
        return item.className === "form-group"
    
    });

    if(validado){
        alert("o formulário foi enviado")



    }
}
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessageError = formItem.querySelector("a")

    textMessageError.innerText = message;

    formItem.classList = "form-group error"
}
