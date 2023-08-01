
import { getPost } from "./modules/postApi.js";
import { createPost } from "./modules/createPost.js";
import { createTag } from "./modules/fiterTag.js";

let allPost = [];

const getPostAll = async () => {
    let data = await getPost();
    console.log(data)
    let keys = Object.keys(data);
    console.log(keys)
    let resulPost = keys.reduce((accum, current) => {
        return [...accum, { key: current, ...data[current] }]
    }, [])
    allPost = resulPost;
    console.log("array completo")
    console.log(allPost)
    prinAllPost(allPost);
    
    prinTag(allPost);

    prinTag2(allPost);
}



const prinAllPost = async (postList) => {
    let containerPost = document.getElementById("container-post");
    postList.forEach((post) => {
        let posCard = createPost(post)
        containerPost.append(posCard)

    });
}




let tagFilter = "#css"


const prinTag = async(tagList) => {

    let resultfilterTag = tagList.reduce((accum,current)=>{
        return current.tag===tagFilter ? [...accum, current]: [...accum]
    },[]);


    let containerPostTag = document.getElementById("container-tag");

    resultfilterTag.forEach((postTag)=>{
        let cardTagg = createTag(postTag)
        containerPostTag.append(cardTagg)
    });
}
let tagFilter2 = "#javascript"


const prinTag2 = async(tagList) => {

    let resultfilterTag1 = tagList.reduce((accum,current)=>{
        return current.tag===tagFilter2 ? [...accum, current]: [...accum]
    },[]);


    let containerPostTag1 = document.getElementById("container-tag-2");

    resultfilterTag1.forEach((postTag)=>{
        let cardTagg1 = createTag(postTag)
        containerPostTag1.append(cardTagg1)
    });
}


getPostAll()