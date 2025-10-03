import { useNavigate } from "react-router-dom"
import type { Product } from "../types"

type ProductCardViewProps = {
    product: Product
    handler: (product: Product) => void
}

export default function ProductCardView({ product, handler }: ProductCardViewProps) {
    const navigate = useNavigate()

    const onAddProduct = () => {
        handler(product)
        navigate("/carrito")
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400">{product.description}</p>
            <p className="mb-3 text-gray-700 dark:text-gray-400">${product.price}</p>
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition"
                onClick={onAddProduct}
            >
                Agregar
            </button>
        </div>
    )
}
