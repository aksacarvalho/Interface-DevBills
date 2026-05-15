import { createContext, useContext, type ReactNode } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const authState = {
      user: { nome: "Aksa", email: "aksa@gmail.com"},
      error: null,
      loading: false,
    };

    function sayMyName() {
       console.log("Aksa")
    }

    return <AuthContext.Provider value={{authState, sayMyName}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
     throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }

  return context;
};