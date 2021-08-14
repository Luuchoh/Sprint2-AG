import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import md5 from "md5";
import Swal from "sweetalert2";

import { useForm } from "../hooks/useForm";
import logo from "../assets/img/logo-morado.png";
import google from "../assets/img/icon-google.png";
import "../style/estilo.css";

const ContenedorLogin = styled.div`
  background: black;
  height: auto;
`;

const Imagen = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  margin: 0px auto;
`;

const LoginComp = () => {
  //Hook historial
  const history = useHistory();
  //Hook customizado
  const [values, handleInputChange, handleFileChange, handleClickFile] =
    useForm({
      email: "",
      password: "",
    });

  const { email, password } = values;

  const validatorUser = async () => {
    try {
      const url = `http://dailybits.herokuapp.com/users`;
      const confirm = await axios
        .get(url, {
          params: {
            email: email,
            password: md5(password),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            let resp = res.data;
            console.log(resp);
            if (resp.length > 0) {
              let {name} =resp[0];
              Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: `${name}`,
                timer: 2000
              })
              setTimeout(() => {
                history.push("/Home");
              }, 2000);
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'usuario o contraseña incorrectos',
              })
            }
          } else {
            console.log("Servidor caido");
          }
        });
    } catch (error) {
      console.log("no entra");
      console.error(error);
    }
  };

  return (
    <ContenedorLogin>
      <Imagen>
        <Link to="/">
          <img src={logo} alt="logo_daily" className="img-Login" />
        </Link>
      </Imagen>
      <h1 className="title-login">Iniciar Sesión</h1>
      <Form>
        <Link className="enlace-Login" to="/Home">
          <img src={google} alt="" />
          Continuar con Google
        </Link>
        <hr id="hr-login"></hr>

        <label htmlFor="email" className="p-login">
          Correo electrónico
        </label>
        <input
          name="email"
          className="email-login"
          type="email"
          id="email"
          placeholder="Ingresa su correo electrónico"
          onChange={handleInputChange}
        />

        <label htmlFor="password" className="p-login">
          Contraseña
        </label>
        <input
          name="password"
          className="pass-login"
          type="password"
          id="password"
          placeholder="Ingresa su correo electrónico"
          onChange={handleInputChange}
        />

        <button className="Button-LR" onClick={validatorUser}>
          Iniciar sesión
        </button>

        <Link className="enlace-pass">¿Se te olvidó tu contraseña?</Link>
        <p className="p-enlace">
          ¿Aún no tienes cuenta?
          <Link className="enlace-inscribirse" to="/register">
            Inscribite
          </Link>
        </p>
      </Form>
    </ContenedorLogin>
  );
};

export default LoginComp;
