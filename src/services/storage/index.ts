import Cookies from "js-cookie";
function setItem(key: string, value: string) {
  Cookies.set(key, value);
}
function removeItem(key: string) {
  Cookies.remove(key);
}
function getItem(key: string) {
  return Cookies.get(key);
}

const storage = { setItem, getItem, removeItem };
export default storage;
