import { useState } from "react";

export const useCounter = () => {
  
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {

    setCounter(counter + 1);
  };

  const handleSubtrack = () => {

    if(counter ===0) return

    setCounter((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return {
    //methods
    handleAdd,
    handleSubtrack,
    handleReset,
    //values
    counter,
  };
};
