import { formatMoney } from '@/src/lib/utils'
import {
	IOrderProps,
	STATUS_TRANSLATION,
} from '@/src/services/orders/getAllOrders'

interface IRowDataProps {
	data: IOrderProps
}

export function Row({ data }: IRowDataProps) {
	return (
		<li className="w-full flex flex-col dark:bg-zinc-900 rounded p-4">
			<div className="w-full flex justify-end">
				<span>
					Status: <strong>{STATUS_TRANSLATION[data.status]}</strong>
				</span>
			</div>
			<div className="w-full grid grid-cols-3 gap-2 border-y-[1px] border-zinc-800 py-4 my-4">
				<div>
					<h3>{data.id}</h3>
					<span>x 2</span>
				</div>
				<span className="justify-self-end">{formatMoney(data.price)}</span>
			</div>
			<span className="self-end">
				Total do Pedido:{' '}
				<strong>{formatMoney(data.quantity * data.price)}</strong>
			</span>
		</li>
	)
}
