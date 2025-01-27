import React from 'react'
import SearchBox from './SearchBox'
import CardList from './CardList'

export default function CardItem({data}) {
  return <div>
    <img src={`https://www.robohash.org/${data.id}`} alt={data.name} />
      <h3>{data.name}</h3>
      <h5>{data.email}</h5>
  
  </div>
}
