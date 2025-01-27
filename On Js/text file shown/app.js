document.getElementById("fileInput")
.addEventListener("change" , (event) =>{
    const file = event.target.files[0]
    if(file) {
        const reader = new FileReader();
        reader.onload = (e) =>
        (document.getElementById("fileContent")
        .textContent = e.target.result)
        reader.readAsText(file)
    }
})