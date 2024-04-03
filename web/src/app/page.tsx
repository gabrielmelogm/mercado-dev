import { Content } from '../components/Content'
import { ListProducts } from '../components/layout/ListProducts'

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<Content className="flex pt-8">
				<ListProducts />
			</Content>
		</main>
	)
}
