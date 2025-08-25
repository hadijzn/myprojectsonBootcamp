
// export default function UseEffect() {
//   // const [number,SetNumber] = useState(0)
//   // useEffect(()=>{
//   // //   console.log('you clicked',{number});
//   //       document.title = `You clicked ${number} times`;

//   // },[number])
  

//   return (
//     <div className='mx-4 my-4'>
//       {/* <button className='border bg-black text-white' onClick={()=>SetNumber(number+1)}>click me</button>
//       <p>{number}</p> */}
//             })}
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [postList,SetPostlist] = useState([])
  useEffect(() =>{
    const fetchdata = async () => {
      const apiFetch = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await apiFetch.json()
      SetPostlist(data)
      console.log(data);
      
    }
    fetchdata()
    },[])
  return (
    <div>
      {postList.map((post)=>{
        return <li key={post.id}>{post.title}</li>
      })}
    </div>
  )
}
