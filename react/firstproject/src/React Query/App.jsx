import React from 'react'
import Componet from './Componet'
import { QueryClient ,QueryClientProvider } from "react-query"
import "./Style.css"
export default function App() {
    const client = new QueryClient({
        defaultOptions:{
            queries:{refetchOnWindowFocus:false},

        }
    }
    )
      return (
    <QueryClientProvider client={client}>
        <Componet/>
    </QueryClientProvider>

)
}
