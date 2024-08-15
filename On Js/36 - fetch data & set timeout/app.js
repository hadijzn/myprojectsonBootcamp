function fetchData(){
    let data = []
    setTimeout(() => {
        data = [{username :'hadi'}]
    },1000);
    return data
}
var response = fetchData()
console.log(response);
