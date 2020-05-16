import { useState } from 'react';

export function useLocalStorage(key: string, initialValue: any): Array<any> {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = <T>(value: T): void => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            window.console.log(error);
        }
    };

    return [ storedValue, setValue ];
}
