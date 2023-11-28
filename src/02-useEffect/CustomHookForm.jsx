import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const CustomHookForm = () => {

  const {formState,onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  });
  

  //const {username, email} = formState ;

 

  return (
    <>
        <h1> Formulario Simple</h1>
        <hr/>

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value = {username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={ email}
            onChange={onInputChange}
        />

        <input 
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name="password"
            value={ password}
            onChange={onInputChange}
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
