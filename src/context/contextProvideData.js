import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProviderData = ({ children }) => {
  const [data, setData] = React.useState(null);

  const select = (item, _id) => {
    setData({ ...item, id: _id });
  };

  const reset = () => {
    setData(null);
  };
  
  return (
    <StateContext.Provider value={{ data, select, reset }}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContextData = () => useContext(StateContext);
