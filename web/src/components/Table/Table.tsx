import { getAllOrders } from '@/src/services/orders/getAllOrders'
import { Row } from './Row'

export async function Table() {
	const orders = await getAllOrders()

	return (
		<ul className="w-full flex flex-col gap-2">
			{orders.map((order) => {
				return <Row data={order} />
			})}
		</ul>
	)
}
