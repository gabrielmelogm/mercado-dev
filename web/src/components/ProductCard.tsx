import Image from 'next/image'
import { IProductProps } from '../services/products/getProject'
import { Button } from './ui/button'

interface IProductCardProps {
	product: IProductProps
}

export function ProductCard(props: IProductCardProps) {
	return (
		<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
			<div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
				<Image
					className="h-full w-full object-cover"
					src={props.product.thumb}
					alt={props.product.title}
					width={352}
					height={384}
				/>
			</div>
			<div className="p-6">
				<div className="mb-2 flex items-center justify-between">
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						{props.product.title}
					</p>
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						{`R$ ${props.product.price}`}
					</p>
				</div>
				<p className="block font-sans text-sm font-normal leading-normal text-gray-700 dark:text-zinc-400 antialiased opacity-75">
					{props.product.description}
				</p>
			</div>
			<div className="p-6 pt-0">
				<Button
					className="w-full dark:bg-white dark:text-black dark:hover:bg-zinc-300"
					type="button"
					variant="ghost"
				>
					Comprar
				</Button>
			</div>
		</div>
	)
}
