export const getLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  return JSON.parse(value);
};
