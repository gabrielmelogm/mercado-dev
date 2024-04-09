'use client'
import { CircleMinus, CirclePlus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { IProductProps } from '../../services/products/getProject'
import { Button } from '../ui/button'

export function ProductQuantity({ product }: { product: IProductProps }) {
	const [quantity, setQuantity] = useState<number>(1)

	function addQuantity() {
		setQuantity(quantity + 1)
	}

	function minQuantity() {
		if (quantity === 1) return

		setQuantity(quantity - 1)
	}

	return (
		<div>
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

			<Button type="button" className="w-[135px]" asChild>
				<Link href={`/checkout/${product.id}/${quantity}`}>Comprar agora</Link>
			</Button>
		</div>
	)
}
