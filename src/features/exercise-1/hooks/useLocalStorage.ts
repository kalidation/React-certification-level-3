import { useState, useEffect, useCallback } from "react";

type Listener<T> = (value: T | null) => void;
type UseLocalStorageReturn<T> = [
  T | null,
  (value: T | ((val: T | null) => T)) => void,
  () => void
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storageListeners: { [key: string]: Listener<any>[] } = {};

export function useLocalStorage<T>(key: string): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);

      return null;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T | null) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        triggerListners<T>(key, valueToStore);
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(null);
      triggerListners<T>(key, null);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key]);

  const triggerListners = <T>(key: string, newValue: T | null) => {
    if (storageListeners[key]) {
      storageListeners[key].forEach((listener: Listener<T>) =>
        listener(newValue)
      );
    }
  };

  // this is triigged once a component is mounted and subscribe to a key change
  useEffect(() => {
    if (!storageListeners[key]) {
      storageListeners[key] = [];
    }
    storageListeners[key].push(setStoredValue);

    // Cleanup function on component unmount
    return () => {
      storageListeners[key] = storageListeners[key].filter(
        (listener) => listener !== setStoredValue
      );
      if (storageListeners[key].length === 0) {
        delete storageListeners[key];
      }
    };
  }, [key]);

  // Listen to outiside react scope changes ( you can test this by changing locolstorage value in browser tools)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        const newValue = event.newValue ? JSON.parse(event.newValue) : null;
        setStoredValue(newValue);
        triggerListners<T>(key, newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue, removeValue];
}
