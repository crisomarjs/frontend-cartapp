import { useEffect, useState } from "react"

import ProductCardView from "./ProductCardView"
import type { Product } from "../types"
import { getProducts } from "../service"

type CatalogViewProps = {
  handler: (product: Product) => void
}

export default function CatalogView({ handler }: CatalogViewProps) {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const prod = await getProducts()
    setProducts(prod)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCardView key={product.id} product={product} handler={handler} />
      ))}
    </div>
  )
}
