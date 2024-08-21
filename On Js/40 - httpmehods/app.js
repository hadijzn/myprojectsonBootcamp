// const getUsers= async () =>{
//       const url = '';
//       const method = "GET";
//       try{
//         req =  await fetch(url,method);
//         const response = await req.json();
//         console.log(response);
//       }
//       catch(err){
//         console.log(err);
//       }
// }

const getUsers = async () => {
  const url = ''
  const method = 'GET'

  try{
    req = await fetch(url,method)
    response = await req.json();
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}

