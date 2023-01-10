import React, { createContext, useState } from "react";

export const AppContex = createContext();

const AppContexProviderComponent = ({ children }) => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => prev + 1);
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  return (
    <AppContex.Provider value={[count, countHandler]}>
      {children}
    </AppContex.Provider>
  );
};

export { AppContexProviderComponent };
