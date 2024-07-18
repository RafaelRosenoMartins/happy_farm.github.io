/* Função para ver o password */
  let button = document.querySelector('.icon')
    button.addEventListener('click', ()=>{
  let inputpassword = document.querySelector('#password')
  
    if(inputpassword.getAttribute('type') == 'password'){
      inputpassword.setAttribute('type', 'text')
    }else{
      inputpassword.setAttribute('type', 'password')
    }
  })

/*Chamando os inputs*/
let usuario = document.querySelector('#usuario') 
let labeluser = document.querySelector('#labelUsuario') 

let senha = document.querySelector('#password')
let labelpass = document.querySelector('#labelPassword') 

/*Definindo ação com estrutura condicional para o input usuario*/
usuario.addEventListener("keyup", () => {
   if(usuario.value.length <=4){
   labeluser.setAttribute('style', 'color:red')
   labeluser.innerHTML = '<strong> User: *Enter at least 4 characters </strong>'
   usuario.setAttribute('style', 'color:red')
   }else{
    labeluser.setAttribute('style', 'color:white')
    labeluser.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'color:black')
   }
})

/*Definindo ação com estrutura condicional para o input password*/
password.addEventListener("keyup", () => {
   if(password.value.length <=4){
   labelpass.setAttribute('style', 'color:red')
   labelpass.innerHTML = '<strong> Password: *Enter at least 4 characters </strong>'
   usuario.setAttribute('style', 'color:red')
   }else{
    labelpass.setAttribute('style', 'color:white')
    labelpass.innerHTML = 'Password'
    password.setAttribute('style', 'color:black')
   }
})

/*Função para armazenar usuário e senha no LocalStorage*/
  function cadastrar() {
    let list_user = JSON.parse(localStorage.getItem('list_user') || '[]')

    list_user.push({
      UsuarioArm: usuario.value,
      PassArm: password.value
    })
    localStorage.setItem('list_user', JSON.stringify(list_user))
  }
  
 