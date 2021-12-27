import { createContext } from "react";
import { useModelAdminForm } from "./ContextForm";
import { useModelAdminList } from "./ContextList"; 

export const ContextAdmin = createContext(null);

const ContextProvider = (props) => {
  const context = {
    useModelAdminForm,
    useModelAdminList
  };

  return (
    <ContextAdmin.Provider value={context}>
      {props.children}
    </ContextAdmin.Provider>
  )
}

export default ContextProvider;