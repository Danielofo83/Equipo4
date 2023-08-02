document.getElementById("close").addEventListener("click", () => {
  window.open(`../index.html`, "_self");
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

const createNewPost = async (postObject) => {
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
  let response = await createNewPost(post)
  return response
})