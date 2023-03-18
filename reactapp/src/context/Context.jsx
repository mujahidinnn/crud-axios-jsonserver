import { createContext, useState } from "react";

export const Context = createContext();

function ContextProv({ children }) {
  const [deleteModal, setDeleteModal] = useState(false);

    const value = [deleteModal, setDeleteModal];
    
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextProv;
