import React, { useState, createContext } from "react";
import axios from "axios";

export const DivsContext = createContext();

const DivsProvider = ({ children }) => {
  const [number, setNumber] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  const add = async () => {
    try {
      const response = await axiosInstance.post("/");
      const allNumbers = [...number];
      allNumbers.push(response.data[0]);
      setNumber(allNumbers);
    } catch (error) {
      console.log(error);
    }
  };

  const getNumbers = () => {
    axiosInstance
      .get("/")
      .then((response) => {
        setNumber(response.data);
      })
      .catch((e) => console.log("Error"));
  };

  const sort = () => {
    number.sort((a, b) => a.random[0] - b.random[0]);
    setNumber([...number]);
  };

  const deleteNumber = async (specialIndex) => {
    try {
      const response = await axiosInstance.delete(`/${specialIndex}`);
      const NumberFilter = number.filter(
        (item) => item.id !== response.data[0].id
      );
      setNumber([...NumberFilter]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DivsContext.Provider
      value={{
        number,
        getNumbers: getNumbers,
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
