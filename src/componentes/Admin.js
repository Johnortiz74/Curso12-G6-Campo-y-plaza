import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import crud from "../conexiones/crud";
import Header from "./Header";
import Sidebar from "./Sidebar";
import swal from 'sweetalert';

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
  
  
  const [categoria, setCategoria] = useState([]);
  
  const cargarCategorias = async () => {
    const response = await crud.GET(`/api/categorias`);
    console.log(response);
    setCategoria(response.categoria);
  }

  useEffect(() => {
    cargarCategorias();
  },[]);


  const borrarCategoria = async (e, idCategoria) => {
    e.preventDefault();
    const response = await crud.DELETE(`/api/categorias/${idCategoria}`);
    console.log(response.msg);
    const mensaje = response.msg;
    if(mensaje ==="categoria eliminada" ){
      
      swal({
        title:'Error',
        text: mensaje,
        icon: 'error',
        buttons:{
          confirm:{
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
        
      });
    
    }
   
    window.location.reload();
  }


  const actualizarCategoria = async ( idCategoria) =>{
    
    const response = await crud.PUT(`/api/categorias/${idCategoria}`);

  }  

  return (
    <>
      <Header/>
<div className="md:flex md:min-h-screen">
        <Sidebar/>
  <main className="flex-1">
        <h1 className="inline bg-gradient-to-r from-indigo-200 via-green-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
          lista de categorias
        </h1>
    <div>
      <table>
        <thead className="bg-green-200">
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>ID</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tbody className="bg-green-100">
          {
            categoria.map(
              item => 
              <tr key={item._id}>
                <td><img src={item.imagen} width="150" height="150"></img></td>
                <td>{item.nombre}</td>
                <td>{item._id}</td>
                <td>
                <input 
                type="submit"
                value="Eliminar"
                className="bg-green-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-green-300 transition-colors"
               onClick={(e) => borrarCategoria(e, item._id)}
            />
             <input 
                type="submit"
                value="Actualizar"
                className="bg-green-500 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-green-300 transition-colors"
                onClick={actualizarCategoria(item._id)}
            />
             <input 
                type="submit"
                value="Crear Producto"
                className="bg-green-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-green-300 transition-colors"
               
            />
                </td>
              </tr>
            )
          }

        </tbody>

      </table>
    </div>
  </main>
</div>
    </>
    );
}

export default Admin;