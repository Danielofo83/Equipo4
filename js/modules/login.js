import { createNav } from "./dom.js";
let token = localStorage.getItem("token");


document.getElementById("nav-wraper-r").innerHTML= createNav(token)



let user = {
    name:"",
    password:""
};

/*
{
    nombre:"",
    correo:"",
    usuario:"",
    contrasenia:""
}
*/

let textFields = document.querySelectorAll("#form-user  input");

console.log(textFields);

textFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    console.log(property, value);
    user[property] = value;
  });
});

const saveUser = async (userObject) => {
  let response = await fetch(
    "https://reto27gequipo4-default-rtdb.firebaseio.com/users/.json",
    {
      method: "POST",
      body: JSON.stringify(userObject),
    }
  );

  let data = await response.json();
  console.log(data);
  return data;
};

document.getElementById("button-login").addEventListener("click", async () => {
  let response = await saveUser(user);
  console.log(response);
  if (response.name) {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    window.open("../../index.html", "_self");
  }
});