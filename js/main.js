import { createNav } from "./modules/dom.js";
let token = localStorage.getItem("token");
!token && window.open("../Views/login.html","_self")
console.log(token)
document.getElementById("nav-wraper-r").innerHTML= createNav(token)
document.getElementById("sign-out").addEventListener("click",()=>{
    localStorage.removeItem("token")
})


document.getElementById("home").addEventListener("click", ()=>{
    window.open("../index.html","_self")
})

document.getElementById("create-post").addEventListener("click",()=>{
    window.open("../Views/newpost.html","_self")
})