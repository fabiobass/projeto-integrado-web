import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

type Role = 'ROLE_STUDENT' | 'ROLE_ADMIN';

export type Tokendata = {
    exp: number;
    user_name: string;
    authorities: Role[];
};

export const getTokendata = () : Tokendata | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as Tokendata;
    } catch (error) {
        return undefined;
    }
};

// verifica se o usuário está autenticado
export const isAuthenticated = () : boolean => {
    const tokenData = getTokendata();
    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
};


export const hasAnyRoles = (roles: Role[]) : boolean => {
    if( roles.length === 0){
        return true;
    }

    const tokenData = getTokendata();

    if(tokenData !== undefined){
        for (var i = 0; i < roles.length; i++) {
            if(tokenData.authorities.includes(roles[i])){
                return true;
            }      
        }
    };

    return false;
};