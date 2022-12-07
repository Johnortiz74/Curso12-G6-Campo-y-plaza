import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  
  const navigate = useNavigate();

  useEffect(() =>{
    const autenticarUsuario = async () =>{
      const token = localStorage.getItem('token')
      //console.log(token)
      if(!token){
        navigate("/login");
      }

    }
    autenticarUsuario()
  },[navigate]);//[] se ejecuta solo una vez
  
  
  
  
  
  const cerrarSesion = () =>{
    localStorage.removeItem("token");
    navigate("/");
  }


  return (
   <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
   <div className='md:w-2/3 lg:w-2/5'>
   <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
      Panel de Administrador 4
    </h1>

    <input
      type='submit'
      value="Cerrar Sesión"
      className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
      onClick={cerrarSesion}
    />
   


   </div>
    
   </main>
    );
}

export default Admin;