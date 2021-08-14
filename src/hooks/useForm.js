import { useState } from 'react';
import { FileUpload } from "../helpers/FileUpload";

export const useForm = (iniciarEstado = {}) => {

    const [values , setValues] = useState([])


    const handleInputChange = ({target}) =>{
        setValues ({
            ...values,
            [target.name]: target.value
        })
    }
    const handleFileChange = (e)=>{
        const file =e.target.files[0];
        console.log(file);
        FileUpload(file)
            .then(res =>{
                let urlImage = document.querySelector('#urlImage')
                urlImage.value = res;
                setValues({
                    ...values,
                    urlImage: res,
                })
            })
            .catch(err =>{
                console.log(err.message);
            })

    }
    const handleClickFile = () =>{
        document.querySelector('#file').click();
    }
    return  [values , handleInputChange, handleFileChange, handleClickFile]
}
