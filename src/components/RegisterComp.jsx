import React from "react";
import styled from "styled-components";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/img/logo-morado.png";
import "../style/estilo.css";
import { useForm } from "../hooks/useForm";

const ContenedorLogin = styled.div`
  background: black;
  height: 657px;
`;

const Imagen = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  margin: 0px auto;
`;

const RegisterComp = () => {
  //hook historial
  const history = useHistory();
  //Hook customizado
  const [values, handleInputChange, handleFileChange, handleClickFile] =
    useForm({
      nombre: "",
      correo: "",
      pass: "",
      urlImage: "",
    });

  const { nombre, correo, pass, urlImage } = values;

  //Consumo de API
  const insertUser = async () => {
    try {
      const url = `http://dailybits.herokuapp.com/users`;
      const confirm = await axios
        .post(url, {
          id: uuid(),
          name: nombre,
          email: correo,
          password: md5(pass),
          avatar: urlImage,
          statitics: [
            {
              timeHours: 0,
              constrainedQuestions: 0,
              CorrectQuestions: 0,
              IncorrectQuestion: 0,
            },
          ],
        })
        
        if (confirm.status === 201) {
        history.push("/login");
        }
        
    } catch (error) {
      console.error(error);
    }
  };

  //Quita la action por defecto del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContenedorLogin>
      <Imagen>
        <img src={logo} alt="logo_daily" className="img-Login" />
      </Imagen>
      <h1 className="title-login">Registrarte</h1>
      <Form onSubmit={handleSubmit}>
        <p className="p-login">Nombre</p>
        <input
          name="nombre"
          className="email-login"
          type="text"
          value={nombre}
          placeholder="Introduce tu nombre"
          onChange={handleInputChange}
        />
        <p className="p-login">Correo electrónico</p>
        <input
          name="correo"
          className="email-login"
          type="email"
          value={correo}
          placeholder="Ingresa su correo electrónico"
          onChange={handleInputChange}
        />
        <p className="p-login">Contraseña</p>
        <input
          name="pass"
          type="password"
          className="email-login"
          value={pass}
          placeholder="Introduce tu contraseña"
          onChange={handleInputChange}
        />
        <p className="p-login">Contraseña</p>
        <input
          accept="image/*"
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button onClick={handleClickFile}>Select image</button>
        <input
          className="email-login"
          type="text"
          name="urlImage"
          id="urlImage"
          disabled
        />
        onChange={handleFileChange}
        <Link className="Button-LR" onClick={insertUser}>
          Registrar
        </Link>
      </Form>
    </ContenedorLogin>
  );
};

export default RegisterComp;
