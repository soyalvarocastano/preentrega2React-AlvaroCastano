
import NavBar from "./componets/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/HomeView/homeView"
import ProductsView from "./views/ProductsView/productsView"
import ContactView from "./views/ContactView/contactView"
import NosotrosView from "./views/NosotrosView/NosotrosView"
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import CartComponent from "./componets/cartComponent"





function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<HomeView/>} />
    <Route exact path="/Nosotros" element={<NosotrosView/>}/>
    <Route exact path="/Productos" element={<ProductsView/>}/>
    <Route exact path="/category/:categoryId" element={<ProductsView/>}/>
    <Route exact path="/Item/:id" element={<ItemDetailContainer/>}/>
    <Route exact path="/Contacto" element={<ContactView/>}/>
    <Route exact path="/Cart" element={<CartComponent />} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
