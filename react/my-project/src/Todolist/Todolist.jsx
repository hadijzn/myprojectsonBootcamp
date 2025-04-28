


import React, { useState } from 'react';

export default function Todolist() {
    const [MyTask, setMyTask] = useState('');
    const [TaskBasket, setTaskBasket] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        if (MyTask) {
            setTaskBasket([...TaskBasket, MyTask]);
            setMyTask('');
        }
    };

    const DeletehandleClick = () => {
        setMyTask('');
    };

    return (
        <div className='flex justify-center items-center text-xl mt-4'>
            <form>
                <input
                    className='border-2 border-black'
                    type='text'
                    value={MyTask}
                    onChange={(e) => setMyTask(e.target.value)}
                    placeholder='please enter a task ....'
                />
                <button className='border-2 border-black' type='button' onClick={handleClick}>
                    add
                </button>
            </form>
            <br />
            <div className='ml-4 border-2 border-black w-1/5 flex flex-col'>
                {TaskBasket.map((task, index) => (
                    <div key={index} className='flex justify-between'>
                        <span>{task}</span>
                        <button onClick={() => setTaskBasket(TaskBasket.filter((t, i) => i !== index))} className='border-2 border-black' type='button'>
                            delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
