const API_BASE = "https://api.escuelajs.co/api/v1/";
const accountImage = document.querySelector("#account-img");
const accountUsername = document.querySelector("#account-username");
const signOutBtn = document.querySelector("#sign-out-btn");

(() => {
  axios(`${API_BASE}auth/profile`, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`
      }
    }
  ).then(response => renderAccountDetails(response.data))
  .catch(err => {
    console.log(err)
    if(err.response.status === 401 || err.response.status === 403){
      localStorage.removeItem("auth-token");
      location.replace("http://127.0.0.1:5500/pages/sign-in.html")
    }
  })
})()

function renderAccountDetails(userData){
  accountImage.src = userData.avatar;
  accountUsername.innerHTML = userData.name;
}

signOutBtn.addEventListener("click", () =>{
  let userAgree = confirm("Are you sure to sign out?");
  if(userAgree){
    localStorage.removeItem("auth-token");
    location.replace("http://127.0.0.1:5500/pages/sign-in.html")
  }
})