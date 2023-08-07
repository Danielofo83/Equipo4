const createNav=(islogged)=>{
    let navbarHorizontal= `
     
    ${
    islogged
     ? 
     `<button id="create-post" type="button" class="btn btn-outline-primary button__post">Create Post</button>
     <button type="button" class="btn border border-0"><img src="./icon/campana_notificacion.svg"
             alt=""></button>
     <div class="dropdown">
             <img src="https://avatars.githubusercontent.com/u/6852277?s=48&v=4" alt=""
                 class="rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         <ul class="dropdown-menu position-absolute position-absolute start-10 translate-middle-x">
             <li><a class="dropdown-item" href="#"><span class="fw-bold">Israel Salinas</span><br> @RazielIquiBalam.com</a>
             </li>
             <li>
               <hr class="dropdown-divider">
             </li>
             <li><a class="dropdown-item" href="#">Dashboard</a></li>
             <li><a class="dropdown-item" href="#">Create Post</a></li>
             <li><a class="dropdown-item" href="#">Reading list</a></li>
             <li><a class="dropdown-item" href="#">Settings</a></li>
             <li>
               <hr class="dropdown-divider">
             </li>
             <li><button id="sign-out" class="dropdown-item" href="#" >Sign Out</button></li>
         </ul>
     </div>`
   :`
   <button id="log"  class="Login_enter btn btn-outline-primary d-none d-md-block ml-1 border border-white ">
       Login
     </button>
 <button id="create-acount"   class=" btn btn-outline-primary Create_account d-none d-md-block">
   Create Account
 </button>
`
  
    }
    ` ;

    return navbarHorizontal ;

};

export{createNav}