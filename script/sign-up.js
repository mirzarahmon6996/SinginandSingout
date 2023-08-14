const signUpForm = document.querySelector("#signup-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const avatar = document.querySelector("#avatar");
const API_BASE = "https://api.escuelajs.co/api/v1/";
signUpForm.addEventListener("submit", signUpUser);

function signUpUser(e){
  e.preventDefault();
  if(username.value.trim().length >= 5 && password.value.trim().length >= 8){
    axios.post(`${API_BASE}users/`, 
      {
        name: username.value,
        email: email.value,
        password: password.value,
        avatar: avatar.value
      }
    )
        .then(response => {
          console.log(response.data)
          if(response.data.id > 0){
            window.location.replace("http://127.0.0.1:5500/pages/sign-in.html")
          }
        })
  }
  else{
    if(username.value.trim().length < 5){
      username.style.border = "1px solid red";
      username.nextElementSibling.style.display = "block"
    }
    if(password.value.trim().length < 8){
      password.style.border = "1px solid red";
      password.nextElementSibling.style.display = "block"
    }
    else{
      // smth is wrong
    }
  }
}