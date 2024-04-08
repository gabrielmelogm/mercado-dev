import Image from 'next/image'

export function Row() {
	return (
		<li className="w-full flex flex-col dark:bg-zinc-900 rounded p-4">
			<div className="w-full flex justify-end">
				<span>
					Status: <strong>PENDENTE</strong>
				</span>
			</div>
			<div className="w-full grid grid-cols-3 gap-2 border-y-[1px] border-zinc-800 py-4 my-4">
				<Image className="object-cover" src="" alt="" width={82} height={82} />
				<div>
					<h3>Title placeholder</h3>
					<span>x 2</span>
				</div>
				<span className="justify-self-end">R$ 10.50</span>
			</div>
			<span className="self-end">
				Total do Pedido: <strong>R$ 21.00</strong>
			</span>
		</li>
	)
}
