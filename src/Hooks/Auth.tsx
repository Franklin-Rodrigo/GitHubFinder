import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

interface Response {
    code: string
}
interface AuthContextData {
    signed: boolean;
    onSuccess(response: Response): void;
    onFailure(response: Response): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
    const [code, setCode] = React.useState<string>(() => {
        const codeFromLocalStaged = localStorage.getItem('@UOL:Code')
        if (!!codeFromLocalStaged) {
            return codeFromLocalStaged
        }
        return ''
    });
    const history = useHistory();
    const onSuccess = (response: Response) => {
        setCode(response.code)
        localStorage.setItem('@UOL:Code', response.code);
        history.push("/")
    };
    const onFailure = (response: Response) => console.error(response);

    return (
        <AuthContext.Provider value={{ signed: !!code, onSuccess, onFailure }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}