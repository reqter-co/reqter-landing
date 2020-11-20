import storage from "../services/storage";
import { TOKEN_KEY } from "@Core/constants";
export const saveToken = (token: string) => {
  storage.setItem(TOKEN_KEY, token);
};
export const getToken = () => {
  const token = storage.getItem(TOKEN_KEY);
  return token;
};

export const removeToken = () => {
  storage.removeItem(TOKEN_KEY);
};
