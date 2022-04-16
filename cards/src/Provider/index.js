import React, { useState, createContext } from "react";

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState([4, 4, 5]);

  const Add = () => {
    number.push(Math.floor(Math.random() * 100));
    setNumber([...number]);
  };

  const Sort = () => {
    number.sort((a, b) => a - b);
    setNumber([...number]);
  };

  const Delete = (specialIndex) => {
    setNumber(number.filter((_, index) => specialIndex !== index));
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        addNumber: Add,
        sortNumbers: Sort,
        deleteNumber: Delete,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
