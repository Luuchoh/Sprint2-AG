import React from "react";
import axios from "axios";
import md5 from "md5";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import logo from "../assets/img/logo-morado.png";
import google from "../assets/img/icon-google.png";
import { useForm } from "../hooks/useForm";
import {
  ContenedorLogin,
  ContainerImagen,
  Imagen,
  Title,
  Form,
  LinkGoogle,
  Logo,
  Hr,
  Label,
  Input,
  Button,
  LinkPass,
  ContainerUser,
  P,
  LinkReg,
} from "../style/Login-Register-styles";

const LoginComp = () => {
  //Hook historial
  const history = useHistory();
  //Hook customizado
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const validatorUser = async () => {
    try {
      const url = `http://dailybits.herokuapp.com/users`;
      await axios
        .get(url, {
          params: {
            email: email,
            password: md5(password),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            let resp = res.data;
            if (resp.length > 0) {
              let { id, name, lastName } = resp[0];
              Swal.fire({
                icon: "success",
                title: "Bienvenido",
                text: `${(name, lastName)}`,
                timer: 2000,
              });
              setTimeout(() => {
                localStorage.setItem("user", JSON.stringify(id));
                history.go("/Home");
              }, 2000);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "usuario o contraseña incorrectos",
              });
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
      <ContainerImagen>
        <Imagen src={logo} alt="logo_daily" />
      </ContainerImagen>
      <Title>Inicia sesión</Title>
      <Form>
        <LinkGoogle to="/Home">
          <Logo src={google} alt="" />
          <span>Continuar con Google</span>
        </LinkGoogle>
        <Hr></Hr>

        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Ingresa su correo electrónico"
          onChange={handleInputChange}
        />

        <Label htmlFor="password">Contraseña</Label>
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="Ingresa su correo electrónico"
          onChange={handleInputChange}
        />

        <Button onClick={validatorUser}>Iniciar sesión</Button>

        <LinkPass>¿Se te olvidó tu contraseña?</LinkPass>

        <ContainerUser>
          <P>¿Aún no tienes cuenta?</P>
          <LinkReg to="/register">Inscribite</LinkReg>
        </ContainerUser>
      </Form>
    </ContenedorLogin>
  );
};

export default LoginComp;
