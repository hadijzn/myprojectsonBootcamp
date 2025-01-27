import React, { useState } from 'react'
import ContexShare from './Contex'
import Componet from './Componet'
export default function App() {
    const [name,setName] = useState('hello its me')
  return (
    <ContexShare.Provider value={{name,setName}}>
               <Componet />
    </ContexShare.Provider>
    )
}
