import {useState} from 'react';

export const useForm = (iniciarEstado = {}) => {

    const [values , setValues] = useState([]);

    const handleInputChange = ({target}) =>{
        setValues ({
            ...values,
            [target.name]: target.value
        })
    }
    return  [values , handleInputChange]
}
