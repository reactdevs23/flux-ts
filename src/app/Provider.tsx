"use client";

import React, { createContext, useState, ReactNode } from "react";

// Define the types for the context
interface AppContextType {
  showGenerateButton: boolean;
  setShowGenerateButton: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with the correct type
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [showGenerateButton, setShowGenerateButton] = useState(false);

  return (
    <AppContext.Provider value={{ showGenerateButton, setShowGenerateButton }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
