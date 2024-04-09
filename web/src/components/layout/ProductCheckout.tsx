'use client'

import { Loader } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { IOrderProps, createOrder } from '../../services/orders/createOrder'
import { IProductProps } from '../../services/products/getProject'
import { Button } from '../ui/button'

export function ProductCheckout({
	product,
	quantity,
}: { product: IProductProps; quantity: string }) {
	const router = useRouter()

	const [loading, setLoading] = useState<boolean>(false)

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()

		setLoading(true)

		const data: IOrderProps = {
			product_id: product.id,
			price: product.price,
			quantity: Number.parseInt(quantity),
		}

		await createOrder(data)
			.then(() => router.push('/'))
			.catch(() => console.error('Erro inesperado'))
			.finally(() => setLoading(false))
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-4">
			<Image
				className="object-cover rounded border-4 border-white"
				src={product.thumb}
				alt={product.title}
				width={500}
				height={400}
			/>
			<h4 className="font-bold">{product.title}</h4>
			<span className="text-zinc-400">
				{Number.parseInt(quantity)} x R$ {product.price}
			</span>
			<span>
				<strong>Total: </strong>
				<span>R$ {Number.parseInt(quantity) * product.price}</span>
			</span>

			<Button type="submit" disabled={loading} className="mt-4">
				{!loading ? 'Confirmar compra' : <Loader />}
			</Button>
		</form>
	)
}
