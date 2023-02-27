import { createContext, useContext } from "react";

export type AppContextType = {
  currentDateState: string;
  setCurrentDateState: (value: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext);
export default AppContext;
