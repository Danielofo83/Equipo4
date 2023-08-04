const createNav=(islogged)=>{
    let navbarHorizontal= `<div class="NavHorizontal d-flex flex-row justify-content-between w-100">
    <div class=" d-flex flex-row">
       <button class="navbar-toggler mx-md-1 me-2 border-0 d-md-none px-0" type="button" data-bs-toggle="offcanvas"
         data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span class="navbar-toggler-icon"></span>
       </button>

       <a class="navbar-brand" href="#">
        <img id="NavInteractionIma" class="Nav_event" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
           alt="" height="40" />
       </a>
       <div class="d-none d-md-block m-auto nav__form__container">
         <form class="d-flex form__search" role="search">
           <div class="input-group">
             <input id="Search" type="text" class="form-control border-end-0" placeholder="Search..." aria-label="Buscar"
               aria-describedby="basic-addon1" >
             <button class="border-0 bg-white p-0 search__button">
               <span class="bg-white border-1 border-start-0 rounded-0 rounded-end input-group-text search__hover"
                 id="basic-addon1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                   aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6" class="crayons-icon">
                   <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">
                     Search
                   </title>
                   <path
                    class="Path1"    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z">
                   </path>
                 </svg>
               </span>
             </button>
           </div>
         </form>
       </div>
       </div>
     
    ${
    islogged
     ? 
     `<div class="d-flex justify-content-end isLogged_Campana_imag">
     <button id="new-post" class="btn btn-outline-primary d-none d-md-block">
       Create Post
     </button>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       role="img"
       aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
       class="crayons-icon d-md-none my-auto"
     >
       <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">Search</title>
       <path
         d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
       ></path>
     </svg>

     <a href="#" class="navbar-nav mx-3 my-auto">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
         aria-labelledby="a4gcjtvbhvh6eh4ee8qmpi1l37goznso" class="crayons-icon">
         <title id="a4gcjtvbhvh6eh4ee8qmpi1l37goznso">
           Notifications
         </title>
         <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
       </svg>
     </a>
     <a href="https://www.instagram.com/emiliodeleonhdz/">
       <img src="https://trellat.es/wp-content/uploads/2015/02/javascript_logo.png" alt=""
         class="navbar-nav rounded-circle me-1" height="40" />
     </a>
   </div>`
   :`<div class="isLogged_login_create">
   <button id="EnterFormButtonLogin"  class="Login_enter btn btn-outline-primary d-none d-md-block ml-1 border border-white ">
       Login
     </button>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
       aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6" class="crayons-icon d-md-none my-auto">
       <title class="Ttile_search1" id="agtkixkainaiofuhj4o3hunp3uvwl1y6">Search</title>
       <path
         d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 
         11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" class="Path2">
       </path>
     </svg>

 <button id="ButtonCreateAcount"   class="Create_account btn btn-outline-primary d-none d-md-block">
   Create Account
 </button>
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
   aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6" class="crayons-icon d-md-none my-auto">
   <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6" class="Title_search2">Search</title>
   <path
     d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 
     20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 
     5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 
     0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" class="Path3">
   </path>
 </svg>
</div>`
  
    }

    
    </div>` ;

    return navbarHorizontal ;

};

export{createNav}