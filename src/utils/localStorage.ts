const setLocalStorage = (key: string, payload: any) => {
  if (payload === undefined || key === undefined) return;

  localStorage.setItem(key, JSON.stringify(payload));
};

const getLocalStorage = <T>(key: string): T | null => {
  if (key === undefined) return null;

  const item = localStorage.getItem(key);

  if (item === null) return null;

  return JSON.parse(item);
};

const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { setLocalStorage, getLocalStorage, removeFromLocalStorage };
