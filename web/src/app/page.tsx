import { Header } from '../components/Header'
import { ListProducts } from '../components/layout/ListProducts'

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-between">
				<div className="w-full flex max-w-[1200px] pt-8">
					<ListProducts />
				</div>
			</main>
		</>
	)
}
