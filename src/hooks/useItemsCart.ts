import { useEffect, useReducer } from "react"
import { itemsReducer } from "../reducer/itemsReducer"
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions"
import type { Item, Product } from "../types"

// Inicializamos el carrito desde sessionStorage
const inititalCartItems: Item[] = JSON.parse(sessionStorage.getItem("cart") || "[]")

export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems)

  // Guardamos en sessionStorage cada vez que cambie el carrito
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  // Agregar producto al carrito
  const handlerAddProductCart = (product: Product) => {
    const hasItem = cartItems.find(i => i.product.id === product.id)
    if (hasItem) {
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      })
    } else {
      dispatch({
        type: AddProductCart,
        payload: product,
      })
    }
  }

  // Eliminar producto del carrito
  const handlerDeleteProductCart = (id: number) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    })
  }

  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  }
}
