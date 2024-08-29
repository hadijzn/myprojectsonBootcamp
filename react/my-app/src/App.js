
import React, { useState } from "react";  

export const InputDisplay = () => {  
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
              placeholder="متن خود را وارد کنید"  
          />  
          <p>شما نوشتید: {inputValue}</p>  
      </div>  
  );  
};  
