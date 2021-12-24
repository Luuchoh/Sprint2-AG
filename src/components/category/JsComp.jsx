import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Img } from "../Question1/Question1Comp";
import "../../style/all-styles.css";
import styled from "styled-components";
import dolar from '../../assets/img/dolar.png'


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

const JsComp = () => {
  const [pregunta, setPregunta] = useState([]);
  const [count, setCount] = useState(1);
  const [vidas, setVidas] = useState(0);

  useEffect(() => {
    obtenerDatos(count);
  }, [count]);

  const obtenerDatos = async (count) => {
    const url = `https://dailybits.herokuapp.com/questionJs/${count}`;
    const resp = await axios.get(url);
    const data = await resp.data;
    setPregunta(data);
    return data;
  };

  const handleClick = (e) => {
    if (e.target.value === pregunta.correct) {
      setVidas(vidas + 100);

      Swal.fire({
        icon: "success",
        title: "Correcta",
        text: "Buen Trabajo",
        timer: 2000,
      })
      setTimeout(() => {
        setCount(+(count + 1))
      }, 2200);
      
    } else {
        console.log ('su respuesta es incorrecta');
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Respuesta Incorrecta",
        })
        setTimeout(() => {
          window.location = '/Home';
        }, 2000);
        setVidas(0);
        
    }
  };
  
  const handleSubmit = ()=>{
    window.location = "/Home"
  }

  return (
    <div className="questionHTML">
      <div className="questionsOne">
        <Content>
          <Barra></Barra>
          <Img src={dolar} alt="" />
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

          <label className="container__label">
            {pregunta.respuesta4}
            <input
              name="input-radio"
              type="radio"
              className="input-radio"
              value={pregunta.respuesta4}
              onChange={pregunta.values}
              onClick={handleClick}
            />
          </label>

          <button className="botonR" onClick={handleSubmit}>SIGUIENTE</button>
        </div>
      </div>
    </div> //FIN
  );
};

export default JsComp;