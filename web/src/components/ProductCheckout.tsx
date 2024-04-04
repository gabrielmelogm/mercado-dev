'use client'
import { CircleMinus, CirclePlus, Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { IOrderProps, createOrder } from '../services/orders/createOrder'
import { IProductProps } from '../services/products/getProject'
import { Button } from './ui/button'

export function ProductCheckout({ product }: { product: IProductProps }) {
	const router = useRouter()

	const [quantity, setQuantity] = useState<number>(1)
	const [loading, setLoading] = useState<boolean>(false)

	function addQuantity() {
		setQuantity(quantity + 1)
	}

	function minQuantity() {
		if (quantity === 1) return

		setQuantity(quantity - 1)
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		setLoading(true)
		const data: IOrderProps = {
			product_id: product.id,
			price: product.price,
			quantity,
		}

		await createOrder(data)
			.then(() => router.push('/'))
			.catch(() => console.error('Erro inesperado'))
			.finally(() => setLoading(false))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex items-center gap-4 py-8">
				<Button
					type="button"
					variant="ghost"
					className="p-0 h-0"
					disabled={quantity === 1}
					onClick={minQuantity}
				>
					<CircleMinus />
				</Button>
				<span>{quantity}</span>
				<Button
					type="button"
					variant="ghost"
					className="p-0 h-0"
					onClick={addQuantity}
				>
					<CirclePlus />
				</Button>
			</div>

			<Button type="submit" disabled={loading} className="w-[135px]">
				{!loading ? 'Comprar agora' : <Loader />}
			</Button>
		</form>
	)
}
