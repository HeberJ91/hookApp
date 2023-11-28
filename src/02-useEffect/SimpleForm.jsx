import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: 'strider',
    email: 'heber@gmail.com'
  })

  const {username, email} = formState ;
  
  const onInputChange = ({target}) =>{
     const {name, value} = target;
     setformState({
        ...formState,
        [name]:value
     })
  }

  useEffect(()=> {
    //console.log('useEffect called')
  }, []);

  useEffect(()=> {
    //console.log('formState change ')
  }, [formState]);

  useEffect(()=> {
    //console.log('email change')
  }, [email]);


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

        { username === 'strider2' &&  <Message/> }

        <input 
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={ email}
            onChange={onInputChange}
        />
    </>
  )
}
