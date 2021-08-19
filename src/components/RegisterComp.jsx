import React from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import logo from "../assets/img/logo-morado.png";
import "../style/estilo.css";
import { useForm } from "../hooks/useForm";
import {
  ContenedorRegister,
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
      apellido: "",
      correo: "",
      pass: "",
      urlImage: "",
    });

  const { nombre, apellido, correo, pass, urlImage } = values;

  //Consumo de API
  const insertUser = async () => {
    try {
      const url = `https://dailybits.herokuapp.com/users`;
      const confirm = await axios.post(url, {
        id: uuid(),
        name: nombre,
        lastName: apellido,
        email: correo,
        password: md5(pass),
        avatar: urlImage
          ? urlImage
          : "http://misimagenesde.com/wp-content/uploads/2017/05/foto-de-perfil-1.jpg",
        statitics: {
          timeHours: 0,
          constrainedQuestions: 0,
          CorrectQuestions: 0,
          IncorrectQuestion: 0,
        },
      });

      if (confirm.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Usuario registrado",
          timer: 2000,
        });
        setTimeout(() => {
          history.push("/Login");
        }, 2000);
      } else {
        Swal.fire({
          icon: "Error",
          title: "El usuario no se ha podido registrar",
        });
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
    <ContenedorRegister>
      <ContainerImagen>
        <Imagen src={logo} alt="logo_daily" />
      </ContainerImagen>
      <Title>Registrarte</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Nombre completo</Label>
        <Input
          name="nombre"
          type="text"
          value={nombre}
          placeholder="Introduce tu nombre"
          onChange={handleInputChange}
        />
        <Label>Apellidos</Label>
        <Input
          name="apellido"
          type="text"
          value={apellido}
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

        <Button onClick={insertUser}>Registrar</Button>
        <ContainerUser>
          <P>¿Ya tienes cuenta?</P>
          <LinkReg to="/Login">Inicia sesión</LinkReg>
        </ContainerUser>
      </Form>
    </ContenedorRegister>
  );
};

export default RegisterComp;
