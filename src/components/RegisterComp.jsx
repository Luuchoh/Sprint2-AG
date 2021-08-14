import React from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

import logo from "../assets/img/logo-morado.png";
import "../style/estilo.css";
import { useForm } from "../hooks/useForm";
import {
  ContenedorLR,
  ContainerImagen,
  Imagen,
  Title,
  Form,
  Label,
  Input,
  ContainerFile,
  ButtonFile,
  Button,
  ContainerUser,
  P,
  LinkReg,
} from "../style/Login-Register-styles";

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
      const confirm = await axios.post(url, {
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
      });

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
    <ContenedorLR>
      <ContainerImagen>
        <Imagen src={logo} alt="logo_daily" />
      </ContainerImagen>
      <Title>Registrarte</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Nombre</Label>
        <Input
          name="nombre"
          type="text"
          value={nombre}
          placeholder="Introduce tu nombre"
          onChange={handleInputChange}
        />
        <Label>Correo electrónico</Label>
        <Input
          name="correo"
          type="email"
          value={correo}
          placeholder="Ingresa su correo electrónico"
          onChange={handleInputChange}
        />
        <Label>Contraseña</Label>
        <Input
          name="pass"
          type="password"
          value={pass}
          placeholder="Introduce tu contraseña"
          onChange={handleInputChange}
        />
        <Label>Imagen de perfil</Label>
        <Input
          accept="image/*"
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <ContainerFile>
          <ButtonFile onClick={handleClickFile}>Select image</ButtonFile>
        </ContainerFile>
        <Input type="text" name="urlImage" id="urlImage" disabled />

        <Button onClick={insertUser}>Iniciar sesión</Button>
        <ContainerUser>
          <P>¿Ya tienes cuenta?</P>
          <LinkReg to="/Login">Inicia sesión</LinkReg>
        </ContainerUser>
      </Form>
    </ContenedorLR>
  );
};

export default RegisterComp;
