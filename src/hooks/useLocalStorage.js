import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setPersState] = useState(() => {
        
        const persStateSerialized = localStorage.getItem(key);

        if(persStateSerialized) {
            const persState = JSON.parse(persStateSerialized);

            return persState;
        };

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setPersState(value);

        localStorage.setItem(key, JSON.stringify(value));

    };

    return [
        state,
        setLocalStorageState
    ];

};