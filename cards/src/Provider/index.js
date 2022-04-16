import React, { useState } from "react";
import { createContext } from "react";

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState([]);
  const [color, setColor] = useState([]);

  function Add() {
    number.push(Math.floor(Math.random() * 100));
    setNumber([...number]);
  }

  function Sort() {
    number.sort((a, b) => a - b);
    setNumber([...number]);
  }

  function Delete(canceledNumber) {
    setNumber(number.filter((item) => item !== canceledNumber));
  }

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
