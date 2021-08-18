import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/all-styles.css";
import styled from "styled-components";
import union from '../../assets/img/Union.png'


const Barra = styled.div`
background-color: green;
width: 90%;
border-radius: 20px;
height: 20px;
border: 1px solid white;
margin-left: 5%;
`
const Content = styled.div`
padding: 10px;
display: flex;
align-items:center;
`
const P = styled.p`
    margin-left: 4px;
    color: white;
`
const Img = styled.img`
    margin-left: 10px;
`

const CssComp = () => {
  const [pregunta, setPregunta] = useState([]);
  const [count, setCount] = useState(1);
  const [vidas, setVidas] = useState(4);

  useEffect(() => {
    obtenerDatos(count);
  }, [count]);

  const obtenerDatos = async (count) => {
    const url = `https://dailybits.herokuapp.com/questionCss/${count}`;
    const resp = await axios.get(url);
    const data = await resp.data;
    setPregunta(data);
    return data;
  };
  if (count === 4) {
    window.location = "/Question2";
  }

  const handleClick = (e) => {
    if (e.target.value === pregunta.correct) {
      correcta();
      console.log("su respuesta es correcta");
    } else {
        console.log ('su respuesta es incorrecta');
    }
  };

  const correcta = () => {
    const boton = document.getElementById("botonR");
    boton.className = ".botonC";
    console.log((boton.className = "botonC"));
  };
  
  const handleSubmit = (e)=>{

        setCount(+(count + 1));
        setVidas(vidas - 1);
    
    if (vidas === 1){
        window.location = '/Home'  
    } 
        
  }

  return (
    <div className="questionHTML">
      <div className="questionsOne">
        <Content>
          <Barra></Barra>
          <Img src={union} alt="" />
          <P id="oport">{vidas}</P>
        </Content>

        <div className="container_questionHTML">
          <img src={pregunta.imag} alt="" />
          <p>{pregunta.pregunta}</p>
        </div>

        <div className="container__input">
          <label className="container__label">
            {pregunta.respuesta1}
            <input
              id="main-input"
              name="input-radio"
              type="radio"
              className="input-radio"
              value={pregunta.respuesta1}
              onClick={handleClick}
            />
          </label>

          <label className="container__label">
            {pregunta.respuesta2}
            <input
              name="input-radio"
              type="radio"
              className="input-radio"
              value={pregunta.respuesta2}
              onClick={handleClick}
            />
          </label>

          <label className="container__label">
            {pregunta.respuesta3}
            <input
              name="input-radio"
              type="radio"
              className="input-radio"
              value={pregunta.respuesta3}
              onClick={handleClick}
            />
          </label>

          <button id="botonR" onClick={handleSubmit}>COMPROBAR</button>
        </div>
      </div>
    </div> //FIN
  );
};

export default CssComp;
