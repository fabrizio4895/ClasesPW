import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'
import './Agregar.css'

function AgregarPelicula() {
  const { register, handleSubmit } = useForm();
  const [statusCode, setStatusCode] = useState(null);
  const navegar = useNavigate() 


  async function onSubmit(values) {
    // Aquí puedes usar values para enviar la información
    await fetch('http://localhost:3080/api/peliculas/newPelicula',  {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    .then( (res) => {
      setStatusCode(res.status) 
      if ( res.status === 201 ) {
        console.log("********************")
        navegar('/');
      } else {
        console.log(statusCode)
      }
    })
    .finally(() => {
      console.log("ya terminamos")
    })

  }

  return (
    <>
    <Cabecera />
    <Menu />
    <form onSubmit={handleSubmit(onSubmit)} className="my-form">
      <label htmlFor="id">ID</label>
      <input type="number" {...register("id")} /> 
      <label htmlFor="movie">MOVIE</label>
      <input type="text" {...register("movie")} />
      <label htmlFor="gender">GENDER</label>
      <input type="text" {...register("gender")} />
      <label htmlFor="country">COUNTRY</label>
      <input type="text" {...register("country")} />
      <label htmlFor="email">E-MAIL</label>
      <input type="email" {...register("email")} />
      <label htmlFor="ipaddress">IP ADDRESS</label>
      <input type="text" {...register("ipaddress")} />
      <button type="submit">Grabar</button>
    </form>
    <Pie />
    </>
  );
}

export default AgregarPelicula