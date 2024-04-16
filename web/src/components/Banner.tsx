import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getRecommendedProduct } from '../services/products/getRecommendedProduct'
import { Content } from './Content'
import { Button } from './ui/button'

export async function Banner() {
	const product = await getRecommendedProduct()

	return (
		<section className="w-full py-16 bg-[#222]">
			<Content className="grid grid-cols-2">
				<div className="flex flex-col gap-6">
					<h2 className="text-5xl font-medium text-white">{product.title}</h2>
					<p className="text-zinc-300">{product.description}</p>
					<Link href={`/product/${product.id}`}>
						<Button className="w-full">
							<ShoppingCart className="mr-2 w-4 h-4" /> Comprar
						</Button>
					</Link>
				</div>
				<div className="w-full flex justify-end gap-4">
					<Image
						src={product.thumb}
						alt={product.title}
						width={350}
						height={350}
					/>
				</div>
			</Content>
		</section>
	)
}
