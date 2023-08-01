/* EJEMPLO RICKMORTY PARA FILTER */

document.getElementById("Search").addEventListener("keyup", (event) => {
  document.getElementById("container-post").innerHTML = "";
  let value = event.target.value;
  let result = allPost.filter((data) => data.toLowerCase().includes(value.toLowerCase()));
  printAllPost(result);
});
 