const createPost = (postObjet)=>{
    let {key,image,author,date,title,tag,top}= postObjet;
    
    let cardPost = document.createElement("div");
    cardPost.classList.add("card", "rounded","shadow");
    
    let imagePost = document.createElement("img");
    imagePost.classList.add("card-img-post");
    imagePost.setAttribute("src",image);
    imagePost.setAttribute("alt","imagen del post");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body","p-0");

    let postInfo = document.createElement("div")
    postInfo.classList.add("post__info", "d-flex", "d-row","gap-3","ms-3","mt-3")

    let imgUser = document.createElement("img")
    imgUser.classList.add("rounded-5","post__photo");
    imgUser.setAttribute("src","https://randomuser.me/api/portraits/thumb/men/75.jpg");
    imgUser.setAttribute("alt","imagen del usuario")

    let containerAuthor = document.createElement("div")
    containerAuthor.classList.add("d-flex", "flex-column")

    let authorName =document.createElement("p")
    authorName.classList.add("post__name", "fw-bold");
    authorName.innerText= author;


    let date1= document.createElement("p")
    date1.classList.add("post__date","m-0");
    date1.innerText=date


    let link= document.createElement("a")
    link.addEventListener("click", () => {
        window.open(`../../Views/detail.html?postId=${key}`, "_self");
      });
    


    let postTitle = document.createElement("h1")
    postTitle.classList.add("post__title", "fw-bold","link-primary", "text-dark", "fw-bold", "link-underline-opacity-0")
    postTitle.innerText= title;

    let cardTag = document.createElement("div")
    cardTag.classList.add("post__prog__lang")

    let tagText= document.createElement("button")
    tagText.classList.add("post__language","btn", "btn-outline-info")
    tagText.innerText= tag

    let cardReactions = document.createElement("div")
    cardReactions.classList.add("post__reactions", "d-flex", "d-row","mb-3")

    let imgReaction = document.createElement("img")
    imgReaction.setAttribute("src","./sources/images/reactions.png")
    
    let rangeText = document.createElement("span")
    rangeText.classList.add("reactions__number")
    rangeText.innerText= `Raiting  ${top} `

    let imgComments = document.createElement("img")
    imgComments.setAttribute("src","./sources/images/comments.png")

    let commentText = document.createElement("span")
    commentText.classList.add("comments__number")
    commentText.innerText="Comments"

    let textRead = document.createElement("span")
    textRead.innerText="2 min read  " 

    let imgRead = document.createElement("img")
    imgRead.setAttribute("src","./icon/mark.svg")


    textRead.append(imgRead)
    commentText.append(imgComments)

    cardReactions.append(imgReaction,rangeText, commentText, textRead)
    cardTag.append(tagText)
    containerAuthor.append(authorName,date1)
    postInfo.append(imgUser,containerAuthor)
    cardBody.append(postInfo)
    link.append(cardBody,postTitle)
    cardPost.append(imagePost,link,cardTag,cardReactions)

    console.log(cardPost)

    return cardPost
    
}

export{createPost}


