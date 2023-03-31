import {useState} from 'react';

export const useForm = (initialBookValues, onSubmitHandler) => {
    const [bookValues, setBookValues] = useState(initialBookValues);

    const changeHandler = (e) => {
        setBookValues(state => ({...state, [e.target.name]: e.target.value}));

    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(bookValues);

        setBookValues(initialBookValues);
    };

    return {
        bookValues,
        changeHandler,
        onSubmit
    };

};