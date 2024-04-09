import { getAllProducts } from '@/src/services/products/getAllProducts'
import { ProductCard } from './ProductCard'

export async function ListProducts() {
	const products = await getAllProducts()

	return (
		<ul className="w-full grid grid-cols-3 gap-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	)
}
