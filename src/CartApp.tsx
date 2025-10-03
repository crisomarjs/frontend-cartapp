import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import CatalogView from "./components/CatalogView"
import CartView from "./components/CartView"
import { useItemsCart } from "./hooks/useItemsCart"

export default function CartApp() {
  
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart()

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<CatalogView handler={handlerAddProductCart} />} index/>
                <Route path="/carrito" element={<CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
