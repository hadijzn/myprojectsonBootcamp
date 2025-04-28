
import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperationClick = (operation) => {
    setInput(input + ' ' + operation + ' ');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className='text-4xl grid justify-center mt-4'>
      <div className=' border-2 border-black h-96 w-96 grid grid-cols-3'>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
          <button
            key={number}
            className='border-2 border-black hover:text-white hover:bg-blue-700'
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className='operators  grid grid-cols-4 justify-start items-center  mt-4 '>
        {['+', '-', '*', '/'].map((operation) => (
          <button
            key={operation}
            className='border-2 border-black mr-1  h-10 w-20 flex justify-center hover:text-white hover:bg-red-500'
            onClick={() => handleOperationClick(operation)}
          >
            {operation}
          </button>
        ))}
      </div>
      <button
        className='border-2 border-black  h-10 w-20 mt-4 hover:text-white hover:bg-green-500'
        onClick={calculateResult}
      >
        =
      </button>
      <button
        className='border-2 border-black  h-10 w-20 mt-4 hover:text-white hover:bg-green-500'
        onClick={clearInput}
      >
        clear
      </button>
      <div className='count-box border-2 border-black my-4'>
        {result !== null ? result : 'count is ...'}
      </div>
    </div>
  );
}

