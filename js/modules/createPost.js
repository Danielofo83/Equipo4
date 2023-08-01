const createPost = (postObjet)=>{
    let {key,image,author,date,title,tag,range}= postObjet;
    
    let cardPost = document.createElement("div");
    cardPost.classList.add("card", "rounded");
    
    let imagePost = document.createElement("img");
    imagePost.classList.add("card-img-post");
    imagePost.setAttribute("src",image);
    imagePost.setAttribute("alt","imagen del post");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let postInfo = document.createElement("div")
    postInfo.classList.add("post__info", "d-flex", "d-row")

    let imgUser = document.createElement("img")
    imgUser.classList.add("rounded-5","post__photo");
    imgUser.setAttribute("src","https://randomuser.me/api/portraits/thumb/men/75.jpg");
    imgUser.setAttribute("alt","imagen del usuario")

    let containerAuthor = document.createElement("div")
    
    let authorName =document.createElement("p")
    authorName.classList.add("post__name", "fw-bold","m-3");
    authorName.innerText= author;


    let date1= document.createElement("p")
    date1.classList.add("post__date","m-3");
    date1.innerText=date


    let link= document.createElement("a")
    link.addEventListener("click", () => {
        window.open(`../../Views/detail.html?postId=${key}`, "_self");
      });
    


    let postTitle = document.createElement("h1")
    postTitle.classList.add("post__title", "fw-bold")
    postTitle.innerText= title;

    let cardTag = document.createElement("div")
    cardTag.classList.add("post__prog__lang")

    let tagText= document.createElement("button")
    tagText.classList.add("post__language")
    tagText.innerText= tag

    let cardReactions = document.createElement("div")
    cardReactions.classList.add("post__reactions", "d-flex", "d-row")

    let imgReaction = document.createElement("img")
    imgReaction.setAttribute("src","./sources/images/reactions.png")
    
    let rangeText = document.createElement("span")
    rangeText.classList.add("reactions__number")
    rangeText.innerText= `Raiting  ${range} `

    let imgComments = document.createElement("img")
    imgComments.setAttribute("src","./sources/images/comments.png")

    let commentText = document.createElement("span")
    commentText.classList.add("comments__number")
    commentText.innerText="Comments"

    let textRead = document.createElement("span")
    textRead.innerText="2 min read" 

    let imgRead = document.createElement("img")
    imgRead.setAttribute("src","./sources/images/read.svg")


    textRead.append(imgRead)
    commentText.append(imgComments)

    cardReactions.append(imgReaction,rangeText, commentText, textRead)
    cardTag.append(tagText)
    containerAuthor.append(authorName,date1)
    postInfo.append(imgUser,containerAuthor)
    cardBody.append(postInfo)
    link.append(cardBody,postTitle,cardTag,cardReactions)
    cardPost.append(imagePost,link)

    console.log(cardPost)

    return cardPost
    
}

export{createPost}


