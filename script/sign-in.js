const signInForm = document.querySelector("#signin-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const API_BASE = "https://api.escuelajs.co/api/v1/"

signInForm.addEventListener("submit", signInUser);

function signInUser(e){
  e.preventDefault();
  if(password.value.trim().length >= 8){
    // sign in
    axios.post(`${API_BASE}auth/login`, 
      {
        email: email.value,
        password: password.value
      }
    ).then(response => {
      if(response.data.access_token){
        localStorage.setItem("auth-token", response.data.access_token);
        window.location.replace("http://127.0.0.1:5500/pages/account.html")
      }
    })
  }
  else{
    password.style.border = "1px solid red";
    password.nextElementSibling.style.display = "block"
  }
}