import React, { useState, createContext } from "react";

export const DivsContext = createContext();

const DivsProvider = ({ children }) => {
  const [number, setNumber] = useState([4, 4, 5]);

  const add = () => {
    number.push(Math.floor(Math.random() * 100));
    setNumber([...number]);
  };

  const sort = () => {
    number.sort((a, b) => a - b);
    setNumber([...number]);
  };

  const deleteNumber = (specialIndex) => {
    setNumber(number.filter((_, index) => specialIndex !== index));
  };

  return (
    <DivsContext.Provider
      value={{
        number,
        addNumber: add,
        sortNumbers: sort,
        deleteNumber: deleteNumber,
      }}
    >
      {children}
    </DivsContext.Provider>
  );
};

export default DivsProvider;
