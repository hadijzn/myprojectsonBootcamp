import React from 'react'

export default function App() {
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form send');
    
}
return (
    <form onSubmit={handleSubmit}>
    <button type="submit">ارسال</button>
    </form>
)

}


