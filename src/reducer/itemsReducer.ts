import type { Item, Product } from "../types";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions"


// Definimos la acción como un tipo discriminado
type Action =
  | { type: typeof AddProductCart; payload: Product }
  | { type: typeof UpdateQuantityProductCart; payload: Product }
  | { type: typeof DeleteProductCart; payload: number } // payload es id del producto

export const itemsReducer = (state: Item[] = [], action: Action): Item[] => {
  switch (action.type) {
    case AddProductCart:
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ]

    case UpdateQuantityProductCart:
      return state.map(i => {
        if (i.product.id === action.payload.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          }
        }
        return i
      })

    case DeleteProductCart:
      return state.filter(i => i.product.id !== action.payload)

    default:
      return state
  }
}
