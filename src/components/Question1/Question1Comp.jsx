import React, { useEffect, useState }  from 'react'
//import { Link } from "react-router-dom";
import axios from "axios";
import '../../style/all-styles.css'


const Question1Comp = () => {


    const[pregunta , setPregunta] = useState([]);
    const [count, setCount] = useState(1);
    
    useEffect(() => {
        obtenerDatos(count)
    },[count])

    const obtenerDatos = async(count) =>{
        const url =`https://dailybits.herokuapp.com/questionHtml/${count}`
        const resp  = await axios.get(url);
        const data = await resp.data
        setPregunta(data);
        //console.log(data);
        return data
    }
    if(count === 4)
    {
        window.location = '/Question2';
    }


    const handleClick = (e) =>{
        console.log(e.target);
       if(e.target.value === pregunta.correct){
           correcta()
            console.log("su respuesta es correcta");
       } 
    }
    

    const correcta = ()=>{
        let boton = document.getElementById('botonR');
        boton.className = 'botonC';
        console.log(boton.className = 'botonC');
    }
    /*
    const handleChange = (element) => {
        
        if(pregunta.id === 1)
        {
            generarPuntos(element,pregunta.respuesta1);
        }//FIN IF 1
        else if (pregunta.id === 2)
        {
            console.log('ENTRE EN pregunta.id == 2')
            generarPuntos(element,pregunta.respuesta2);
        }else if (pregunta.id === 3)
        {
            console.log('ENTRE EN COUNT == 3')
            generarPuntos(element,pregunta.respuesta2);
        }
    };//FIN HANDLECHANGE
    */

return (

        <div className="questionHTML">


                <div className="questionsOne">  

                
                    <div className="container_questionHTML" >
                            <img src={pregunta.imag} alt="" />
                            <p>{pregunta.pregunta}</p>
                            
                    </div>

                    
                    <div className="container__input">
                        <label className="container__label">{pregunta.respuesta1}
                            <input id="main-input" name="input-radio" type="radio" className="input-radio" value={pregunta.respuesta1} onClick={handleClick} />

                        </label>

                        <label className="container__label" >{pregunta.respuesta2}
                            <input name="input-radio" type="radio" className="input-radio" value={pregunta.respuesta2} 
                            onClick={handleClick} />
                        </label>

                        <label className="container__label" >{pregunta.respuesta3}
                            <input name="input-radio" type="radio" className="input-radio" value={pregunta.respuesta3} onClick={handleClick} />
                        </label>

                    <button id="botonR" onClick={() => setCount(+(count+1))}>COMPROBAR</button>
                    
                </div>

            </div>

        </div>//FIN
        
    )
    
}

export default Question1Comp;