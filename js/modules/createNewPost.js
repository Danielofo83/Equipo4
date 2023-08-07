import {getUserById} from "./postApi.js";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

console.log(userId);

const getUserData = async () => {
  let userData = await getUserById(userId);
  console.log(userData);
  printPetDetail(userData);
};

const printPetDetail = (userData) => {
  let { name } = userData;
  let authorName = document.createElement("input")
  authorName.classList.add("form-control")
  authorName.setAttribute("name", "name")
  authorName.setAttribute("value",`${name}` )
 
  return authorName
};

getUserData();



document.getElementById("close").addEventListener("click", () => {
  window.open("/", "_self");
});

let post = {
  author: "",
  date: "",
  description: "",
  image: "",
  tag: "",
  title: ""
}

let postFields = document.querySelectorAll("#form-post  input");
postFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    console.log(property, value);
    post[property] = value;
  });
});

const createFech =()=>{
  let currentDate = new Date;
  let date = currentDate.toISOString().slice(0,10);
  return date
}

const createNewPost = async (postObject) => {
  postObject.date = createFech();
  postObject.top = Math.floor(Math.random()*5)
  let response = await fetch(
    "https://reto27gequipo4-default-rtdb.firebaseio.com/posts/.json",
    {
      method: "POST",
      body: JSON.stringify(postObject),
    }
  );
  

  let data = await response.json();
  console.log(data);
  return data;
};

document.getElementById("savePost").addEventListener("click", async () => {
  window.open("/","_self")
  let response = await createNewPost(post)
  return response
  
})

getUserAll()