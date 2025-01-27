import React from 'react'
import Axios from 'axios'
import { isError, useQuery } from 'react-query'
export default function Componet() {
    const {data , isLoading,refetch,isError } = useQuery(["cat"],()=>{
        return Axios.get("https://catfact.ninja/fact") .then((res) => res.data);
    });
    if(isLoading){
      return   <h2>Loading...</h2>
    }
    if(isError) {
        return <h2>is there be error 
        </h2>
    }
  return (
    <div>
        <h2>{data?.fact}</h2>
        <button onClick={refetch}>NEXT FACT</button>
    </div>
  )
}
