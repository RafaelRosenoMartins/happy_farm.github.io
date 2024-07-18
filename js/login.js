/*FUNÇÃO PARA VER O PASSWORD*/
let button = document.querySelector('.icon')
button.addEventListener('click', ()=>{
  let inputpassword = document.querySelector('#password')

  if(inputpassword.getAttribute('type') == 'password'){
    inputpassword.setAttribute('type', 'text')
  }else{
    inputpassword.setAttribute('type', 'password')
  }
})

/*AUTENTICAÇÃO DO LOGIN*/ 
function entrar(){

 
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')

let error_msg = document.querySelector('#erro_msg')
let list_user = []

let userValid = {
  usuario:" ",
  password:" "
}
//Aqui é onde os dados vão ser direciado para determinado objeto criado na lista do localStorage
list_user = JSON.parse(localStorage.getItem('list_user'))

list_user.forEach((item) =>{
if(usuario.value == item.UsuarioArm && password.value == item.PassArm){
userValid = {
  usuario: item.UsuarioArm,
  password: item.PassArm
}}})

//Estrutura condicional para decidir a direção do usuário caso erre ou acerte o login.
if(usuario.value == userValid.usuario && password.value == userValid.password && usuario.value || null && password.value || null){ 
   window.location.href = 'homegame_pag.html'

}else{ 
  alert("Username or password is incorrect, please try a gain")}
  usuario.focus()

}




