import { Banner } from '../components/Banner'
import { Content } from '../components/Content'
import { ListProducts } from '../components/layout/ListProducts'

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<Banner />
			<Content className="flex pt-8 flex-col">
				<h2 className="text-3xl font-bold mb-8">Novos Produtos</h2>
				<ListProducts />
			</Content>
		</main>
	)
}
