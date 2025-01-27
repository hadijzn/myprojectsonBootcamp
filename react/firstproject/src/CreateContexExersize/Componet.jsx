import React, { useContext } from 'react'
import ContexShare from './Contex'

export default function Componet() {
    const {setName,name} = useContext(ContexShare)
  return (
    <div>
      {name}
      {/* <button onClick={() => setName('NewName')}
        >Change Name</button> */}
    </div>
  )
}
