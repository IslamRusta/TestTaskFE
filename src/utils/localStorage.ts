export const clearLocalStorage = () => {
  window.localStorage.removeItem('referralCode');
  window.localStorage.removeItem('email');
};

export const addValueToLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getValueFromLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};
