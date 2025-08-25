import React, { use, useEffect, useState } from 'react'
import SearchBox from './SearchBox'

export default function Users() {
    const [showData,SetShowData] = useState([])
    const [newData,SetNewData]= useState([])
    useEffect(()=>{
    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await data.json()
            console.log(json);
                SetShowData(json)
                SetNewData(json)
    }
    fetchData()
    },[])
     const handleSearch = (params)=>{
      const newUsers = showData.filter((user)=>{
        return user.name.toLowerCase().includes(params.toLowerCase())
      }
          

    )
    SetNewData(newUsers)
  }
     return (
    <div className="   min-h-screen flex justify-center items-center pb-12">
  <div className="flex flex-row gap-8 flex-wrap justify-center ">
    {newData.map((user) => (
      <div className="bg-blue-400 p-4 rounded h-60 w-60 items-center flex flex-col justify-center" key={user.id}>
        <img className='hover:scale-110 transition-all' src={`https://robohash.org/${user.id}`} alt={user.name} width={128}></img>
        <h1 className="text-xl font-bold text-center">{user.name}</h1>
        <p className="text-sm">{user.email}</p>
      </div>
    ))}
     
  </div>
</div>

  )
}