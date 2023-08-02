import { createNav } from "./modules/createNav.js";

let token = localStorage.getItem("token");
console.log(token);

//!token && window.open("../views/login.html", "_self");


document.getElementById("button-login").addEventListener("click", async () => {
    localStorage.setItem(
      "token",
      "dev01"
    );
    window.open("../index.html", "_self");
  }
);

document.getElementById("nav-dev").innerHTML = createNav(token);
