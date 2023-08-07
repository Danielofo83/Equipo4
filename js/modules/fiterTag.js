const createTag = (tagObjet) => {
    let {key,title,top} = tagObjet
    
    let containerTag= document.createElement("div")
    containerTag.classList.add("tag-filter")

    let line = document.createElement("hr")
    line.classList.add("my-2")
    
    let linkTag= document.createElement("a")
    linkTag.addEventListener("click", () => {
        window.open(`../../Views/detail.html?postId=${key}`, "_self");
      });

    let titleTag = document.createElement("a")
    titleTag.classList.add("listing__type", "my-2", "text-dark","text-decoration-none" ,".hover-overlay" ,"link-primary", "text-dark", "fw-bold", "link-underline-opacity-0" )
    titleTag.innerText= title

    let contentComment = document.createElement("div")

    let comment1 =  document.createElement("p")
    comment1.classList.add("comment__vinc")
    comment1.innerText=`${top} Comentarios`

    contentComment.append(comment1)
    linkTag.append(titleTag)
    containerTag.append(line,linkTag ,contentComment)

    return containerTag
}

export {createTag}

