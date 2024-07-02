import { useEffect, useRef, useState } from "react";

const useLocalStorage = <T,>(
    key: string,
    defaultValue: T,
    overWrite = false
) => {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined")
            throw new Error("localStorage can be used only in client side");
        if (overWrite) return defaultValue;
        else {
            try {
                const currentValue = window.localStorage.getItem(key);
                if (currentValue) return JSON.parse(currentValue) as T;
            } catch (error) {
                console.error(
                    `Error while reading localStorage item with key=${key}:`,
                    error
                );
                return defaultValue;
            }
            return defaultValue;
        }
    });

    const previousKeyRef = useRef<string>("");

    useEffect(() => {
        const previousKey = previousKeyRef.current;

        if (previousKey !== key && previousKey) {
            try {
                window.localStorage.removeItem(previousKey);
            } catch (error) {
                console.error(
                    `Error while removing localStorage item with key=${previousKey}:`,
                    error
                );
            }
        }
        previousKeyRef.current = key;
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(
                `Error while setting localStorage item with key=${key}:`,
                error
            );
        }
    }, [value, key, defaultValue]);

    return [value, setValue] as const
}

export default useLocalStorage