import { ProductDashboard } from '@/src/components/layout/ProductDashboard'
import { RecommendedProducts } from '@/src/components/layout/RecommendedProducts'

interface ProductPagesProps {
	params: {
		id: string
	}
}

export default function Page({ params }: ProductPagesProps) {
	return (
		<div className="pt-14">
			<ProductDashboard id={params.id} />
			<div className="w-full flex justify-center py-12">
				<div className="flex flex-col gap-4">
					<h3 className="text-xl font-semibold">Mais produtos</h3>
					<RecommendedProducts />
				</div>
			</div>
		</div>
	)
}
