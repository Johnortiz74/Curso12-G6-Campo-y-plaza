import React from "react";
import { Link  } from 'react-router-dom';

const Sidebar = () => {
  
  return (
        <aside className="md:w-80 lg:w-60 px-5 py-10 bg-slate-500">
            
            
             <Link
                className="bg-violet-600 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg"
                to={"/crear-categoria"}
            >
        Crear Categoria
      </Link>


      
      
        </aside>
    );
}

export default Sidebar;