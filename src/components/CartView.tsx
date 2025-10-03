import { useEffect, useState } from "react"
import type { Item } from "../types"
import { useNavigate } from "react-router-dom"
import { calculateTotal } from "../service"

type CartViewProps = {
    items: Item[]
    handlerDelete: (id: number) => void
}

export default function CartView({ items, handlerDelete }: CartViewProps) {
    const [total, setTotal] = useState<number>(0)
    const navigate = useNavigate()

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])

    const onDeleteProduct = (id: number) => {
        handlerDelete(id)
    }

    const onCatalog = () => {
        navigate("/")
    }

    if (items.length === 0) {
        // Carrito vacío
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <p className="text-yellow-500 text-xl font-semibold mb-4">
                    No hay productos en el carrito
                </p>
                <button
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                    onClick={onCatalog}
                >
                    Regresar a los productos
                </button>
            </div>
        )
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-4">Carrito de Compras</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Precio</th>
                            <th className="px-6 py-3">Cantidad</th>
                            <th className="px-6 py-3">Total</th>
                            <th className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr
                                key={item.product.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {item.product.name}
                                </td>
                                <td className="px-6 py-4">${item.product.price}</td>
                                <td className="px-6 py-4">{item.quantity}</td>
                                <td className="px-6 py-4">${item.product.price * item.quantity}</td>
                                <td className="px-6 py-4">
                                    <button
                                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                        onClick={() => onDeleteProduct(item.product.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="text-end font-bold">
                                Total
                            </td>
                            <td colSpan={2} className="font-bold">
                                ${total}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <button
                className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition"
                onClick={onCatalog}
            >
                Seguir comprando
            </button>
        </>
    )
}
