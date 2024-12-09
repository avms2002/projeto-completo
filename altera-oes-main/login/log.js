const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "john" && password === "johndev") {
        alert("Você fez login com sucesso.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function logar() {
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
         
    if(login === '' || senha === ''){
        document.querySelector("#senha").getAttribute("type") === "text"
    }  else{
        document.querySelector("#senha").getAttribute("type") === "password"

        }
    
 
}
