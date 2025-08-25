import React from 'react'
import SearchBox from './SearchBox'
import Users from './Users'

export default function App() {
  return (
    <div className='flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500'>
        <SearchBox/>
        <Users/>
    </div>
  )
}
