// Estado global com Context API do React
import { createContext } from "react";
import { Tokendata } from "util/auth";

// estado global desse tipo:
export type AuthContextData = {
    authenticated: boolean;
    tokenData?: Tokendata;
  };


// dados e funcão
export type AuthContextType = {
    authContextData: AuthContextData,
    setAuthContextData: (authContexData: AuthContextData ) => void;
}

// criando o contexto
export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false
    },
    setAuthContextData: () => null
});