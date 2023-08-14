const signInLink = document.querySelector("#sign-in-link");
const signUpLink = document.querySelector("#sign-up-link");
const accountLink = document.querySelector("#account-link");

function validateToken(){
  if(localStorage.getItem("auth-token")){
    let expTime = JSON.parse(atob(localStorage.getItem("auth-token").split(".")[1])).exp;
    if(expTime * 1000 < new Date().getTime()){
      localStorage.removeItem("auth-token");
    }
    signInLink.style.display = "none"
      signUpLink.style.display = "none";
      accountLink.style.display = "block"
  }
  else{
    accountLink.style.display = "none"
    signInLink.style.display = "block"
    signUpLink.style.display = "block";
  }
}

validateToken()