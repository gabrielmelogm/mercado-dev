import { Content } from '@/src/components/Content'
import { ProductCheckout } from '@/src/components/ProductCheckout'
import { Button } from '@/src/components/ui/button'
import { getProject } from '@/src/services/products/getProject'
import Image from 'next/image'

interface ProductPagesProps {
	params: {
		id: string
		quantity: number
	}
}

export default async function Page(props: ProductPagesProps) {
	const product = await getProject(props.params.id)

	return (
		<div className="w-full pt-14 flex justify-center text-center">
			<Content className="flex justify-center">
				<div className="flex flex-col items-center gap-4 w-full max-w-[600px]">
					<div className="w-full pb-4 border-b-2">
						<h3 className="text-3xl font-bold">Confirme sua compra</h3>
					</div>
					<ProductCheckout
						product={product}
						quantity={String(props.params.quantity)}
					/>
				</div>
			</Content>
		</div>
	)
}
