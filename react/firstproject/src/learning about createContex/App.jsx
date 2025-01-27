import BabyHome from './BabyHome'
import contex from './CreateContex'
export default function App() {
  const value = "what we want to use"
    return (
      <contex.Provider value={value}>
            <BabyHome></BabyHome>
      </contex.Provider>
    )
}
