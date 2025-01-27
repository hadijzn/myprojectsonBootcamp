import React from 'react'

export default function App() {
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map(num => num *2)
    console.log({doubled});

    const users = [
        {name : "ali " , age:24},
        {name : " alireza " , age:34},
        {name : " alisadeghi " , age:83}
    ]
    const names = users.map(user => user.name)
    console.log({names})
    const UserList = () => {
        return (
            <div>
                {users.map((user,index) => (
                    <p key={index}> {user.name}</p>
                ))}
            </div>
        )
    }
}