type LocalStorageKey = "cityOption";

export const setNumberToLocalStorage = (
  key: LocalStorageKey,
  value: number,
): void => {
  localStorage.setItem(key, value.toString());
};

export const getNumberFromLocalStorage = (
  key: LocalStorageKey,
  defaultValue: number,
): number => {
  const value = localStorage.getItem(key);
  if (value === null) {
    localStorage.setItem(key, defaultValue.toString());
    return defaultValue;
  }
  const numValue = Number.parseInt(value);
  if (Number.isNaN(numValue)) {
    localStorage.setItem(key, defaultValue.toString());
    return defaultValue;
  }
  return numValue;
};
