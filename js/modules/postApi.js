const getPost = async()=>{
    let response = await fetch("https://reto27gequipo4-default-rtdb.firebaseio.com/posts/.json")
    let data = await response.json()
    return data
}
const getPostById = async (id) => {
    let response = await fetch(
      `https://reto27gequipo4-default-rtdb.firebaseio.com/posts/${id}/.json`
    );
    let data = await response.json();
    return data;
  };
  

export {getPost,getPostById}