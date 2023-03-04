import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [activeSection, setActiveSection] = useState();

  const contextValue = useMemo(() => {
    return [activeSection, setActiveSection];
  }, [activeSection, setActiveSection]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
