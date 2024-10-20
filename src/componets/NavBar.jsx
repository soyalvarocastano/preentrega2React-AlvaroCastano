import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        
        <div className="flex-shrink-0">
          <Link to={"/"}>
          <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react-23807.appspot.com/o/logo.jpg?alt=media&token=3774d687-4d59-4bf6-9aa7-ef027a2c92b3" alt="Logo" className="h-20 w-auto rounded-full" />
          </Link>
        </div>

        
        <div className="hidden md:flex space-x-8">
        <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded"> <Link to= {"/Nosotros"}>Nosotros</Link> </button> 
        <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded"> <Link to= {"/Productos"}>Productos</Link> </button>
        <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded"> <Link to= {"/contacto"}>Contacto</Link> </button>
        </div>

        
        <div>
          <CartWidget />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;