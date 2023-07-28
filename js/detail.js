import {getPostById} from "./modules/postApi.js";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");

console.log(postId);

const getPostData = async () => {
  let postData = await getPostById(postId);
  console.log(postData);
  printPetDetail(postData);
};

const printPetDetail = (postData) => {
  let { image,author,date,title,tag, description } = postData;
  document.getElementById("image-post").src=image;
  document.getElementById("image-user").src="https://randomuser.me/api/portraits/thumb/men/75.jpg";

  document.getElementById("name-user").innerText = author;
  document.getElementById("date-post").innerText = `${date.day} / ${date.month} /${date.year}`;
  document.getElementById("range").innerHTML=`Raiting  ${range} `;
  document.getElementById("title-post").innerText= title;
  document.getElementById("text-tag").innerText=tag;
  document.getElementById("description").innerText=description;
  
};

getPostData();