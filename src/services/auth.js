import decode from 'jwt-decode';
export const TOKEN_KEY = "@CESTA/token";
export const TOKEN_EXPIRATION = "@CESTA/expireIn";
const USUARIO = '@CESTA:usuario'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token, usuario) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USUARIO, JSON.stringify(usuario));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USUARIO);
};
export const getUser = () => JSON.parse(localStorage.getItem(USUARIO));
export const isTokenExpired = () => {
  try {
    const decoded = decode(getToken());
    const date = new Date() / 1000;
    if (decoded.exp < date) {
      return true;
    }
    return false;
  } catch (err) {
    console.log("Expired check failed");
  }
}