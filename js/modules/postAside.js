const createPostAside =(objectPost)=>{
    let {key,image,description,title,tag}= objectPost;
    
    let cardPostAside = document.createElement("div");
    cardPostAside.classList.add("card", "mb-4", "card-post_aside", "shadow");
    
    let imagePostAside = document.createElement("img");
    imagePostAside.classList.add("card-img-post1");
    imagePostAside.setAttribute("src",image);
    imagePostAside.setAttribute("alt","imagen del post");

    let cardBodyAside = document.createElement("div");
    cardBodyAside.classList.add("card-body-aside","p-3");

    let postInfoAside = document.createElement("div")
    postInfoAside.classList.add("post__info",  "d-row")


    let linkAside= document.createElement("a")
    linkAside.addEventListener("click", () => {
        window.open(`../../Views/detail.html?postId=${key}`, "_self");
      });
    

    let postTitleAside = document.createElement("h6")
    postTitleAside.classList.add( "fw-bold")
    postTitleAside.innerText= title;

    let postDescriptionAside = document.createElement("p")
    postDescriptionAside.classList.add( "p_post_aside")
    postDescriptionAside.innerText= description

    let cardTagAside = document.createElement("div")
    cardTagAside.classList.add("post__prog__lang")

    let tagTextAside= document.createElement("p")
    tagTextAside.classList.add("post__language")
    tagTextAside.innerText= tag

    let buttonShare = document.createElement("button")
    buttonShare.classList.add("w-75","btn", "btn-primary")
    buttonShare.innerText="Share your project"

    let buttonSee = document.createElement("button")
    buttonSee.classList.add("w-75","btn", "btn-light")
    buttonSee.innerText="See all posts"

    
    cardTagAside.append(tagTextAside)
    linkAside.append(postTitleAside)
    postInfoAside.append(linkAside,postDescriptionAside)
    cardBodyAside.append(postInfoAside,buttonShare,buttonSee)
    cardPostAside.append(imagePostAside,cardBodyAside)

    return cardPostAside
}

export{createPostAside}