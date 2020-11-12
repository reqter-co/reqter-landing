"use strict";
// import Cookies from "js-cookie";
function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}
function removeItem(key: string) {
  localStorage.removeItem(key);
}
function getItem(key: string) {
  return localStorage.getItem(key);
}

const storage = { setItem, getItem, removeItem };
export default storage;
