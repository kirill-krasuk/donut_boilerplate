import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, <V>(value: V) => void] {
	const [ storedValue, setStoredValue ] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);

			return item
				? (JSON.parse(item) as T)
				: initialValue;
		} catch {
			return initialValue;
		}
	});

	const setValue = <T>(value: T) => {
		try {
			const valueToStore = value instanceof Function
				? value(storedValue)
				: value;

			setStoredValue(valueToStore);

			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.error(error);
		}
	};
	return [ storedValue, setValue ];
}

export { useLocalStorage };
