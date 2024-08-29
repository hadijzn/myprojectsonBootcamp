
import React, { useState } from "react";  

const InputDisplay = () => {  
    const [inputValue, setInputValue] = useState("");  

    const handleChange = (event) => {  
        setInputValue(event.target.value);  
    };  

    return (  
        <div>  
            <input  
                type="text"  
                value={inputValue}  
                onChange={handleChange}  
                className="border border-gray-300 p-2 rounded"  
                placeholder="متن خود را وارد کنید"  
            />  
            <p className="mt-4 text-lg">شما نوشتید: {inputValue}</p>  
        </div>  
    );  
};  

export default InputDisplay;  
