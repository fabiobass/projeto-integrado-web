
const tokenKey = 'authData';

type LoginResponse = {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    userId: number;
}

// salvando local storage
export const saveAuthdata = (obj : LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

// retorna o token
export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(str) as LoginResponse;

}

// remove
export const removeAuthdata = () => {
    localStorage.removeItem(tokenKey);
}