async function mybutton(){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const method = "GET"
        try{
            req = await fetch(url,{ method: method })
            response = await req.json()
            console.log(response);
            showPost(response)
        }
        catch(err){
                console.log(err);
        }
}
const showPost = (posts) => {
        posts.forEach(post => {
              const postcreate =   createPoste(post)
              console.log(postcreate);
              document.getElementById("postss").appendChild(postcreate)
        });
}
const createPoste = (post) =>{
        const pTag = document.createElement("p")
       pTag.innerText = post.body
       post.title 
       post.id
       post.userId
        return pTag
}
