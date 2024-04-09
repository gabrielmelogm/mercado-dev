import { formatMoney } from '@/src/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { IProductProps } from '../../services/products/getProject'
import { Button } from '../ui/button'

interface IProductCardProps {
	product: IProductProps
	variant?: 'default' | 'short'
}

export function ProductCard({
	product,
	variant = 'default',
	...props
}: IProductCardProps) {
	return (
		<li
			{...props}
			className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
		>
			<div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
				<Image
					className="h-full w-full object-cover"
					src={product.thumb}
					alt={product.title}
					width={352}
					height={384}
				/>
			</div>
			<div className="p-6">
				<div className="mb-2 flex items-center justify-between">
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						{product.title}
					</p>
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						{formatMoney(product.price)}
					</p>
				</div>
				<p
					className={`block font-sans text-sm font-normal leading-normal text-gray-700 dark:text-zinc-400 antialiased opacity-75 ${
						variant === 'short' && 'hidden'
					}`}
				>
					{product.description}
				</p>
			</div>
			<div className="p-6 pt-0">
				<Button
					className="w-full dark:bg-white dark:text-black dark:hover:bg-zinc-300"
					type="button"
					variant="ghost"
					asChild
				>
					<Link href={`/product/${product.id}`}>Comprar</Link>
				</Button>
			</div>
		</li>
	)
}
