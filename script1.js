//import {user as loginUser} from './script.js'
let loginBtn = document.getElementById("login");
let user = document.getElementById("user");
let pwd = document.getElementById("pwd");
let form = document.getElementById("form-content");
let loginUser = document.getElementById("loginUser");

loginBtn.addEventListener('click',loginEvent);

async function loginEvent(e){
    console.log(user.value);
    //console.log(pwd.value);
    //logging into the website using username and password
    try{
    let response = await fetch("https://fakestoreapi.com/auth/login",{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
            username: user.value,
            password: pwd.value
        })
    })
    if(!response.ok){
        window.alert("Please enter the correct username and password");
        throw new error(`Response Status: ${response.status}`);
        
    }
    console.log(response);
    const resJson = response.json();
    form.innerHTML=`<h1>Successfully Logged In!!! Continue shopping<h1>`
    loginUser.textContent=`${user.value}`;

    }catch (error) {
        console.error(error.message);
      }
}