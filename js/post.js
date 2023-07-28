
import {getPost} from "./modules/postApi.js";
import {createPost} from "./modules/createPost.js";

let allPost =[];

const getPostAll= async()=>{
    let data = await getPost();
    console.log(data)
    let keys = Object.keys(data);
    console.log(keys)
    let resulPost = keys.reduce((accum, current)=>{
        return [...accum, {key:current, ...data[current]} ]
},[])
allPost= resulPost;
console.log("array completo")
console.log(allPost)
prinAllPost(allPost);
}



 const prinAllPost = async(postList)=>{
    let containerPost = document.getElementById("container-post");
    postList.forEach((post) => {
        let posCard = createPost(post)
        containerPost.append(posCard)
        
    });
 }

 getPostAll()
 

