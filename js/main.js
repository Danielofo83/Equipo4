let token = localStorage.getItem("token");
console.log(token);

!token
  ? window.open("./Views/login.html", "_self")
  :  window.open(`../index.html`, "_self");
