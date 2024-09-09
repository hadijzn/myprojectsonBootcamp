import React, { useEffect, useState } from 'react';  

export default function Users() {

    const [data, setData] = useState([]);  
    const fetchData = async () =>  {

        const data= await fetch('https://jsonplaceholder.typicode.com/users') 
        const jsonData = await data.json();
        setData(jsonData);
    }
    useEffect(() => {  
        fetchData(); 
    }, []);
    console.log({data});

  return (
    <div>  
            <h1>Users</h1>  
            <ul>  
                {data.map(user=> (  
                    <li key={user.id}>{user.name}</li> 
                ))}  
            </ul>  
        </div>  
  )
}
