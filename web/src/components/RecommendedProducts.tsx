import { getAllProjects } from '../services/products/getAllProducts'
import { ProductCard } from './ProductCard'

export async function RecommendedProducts() {
	const products = await getAllProjects()

	return (
		<ul className="flex gap-4">
			{products.map((product, index) => {
				if (index >= 3) return <></>
				return (
					<ProductCard key={product.id} product={product} variant="short" />
				)
			})}
		</ul>
	)
}
