import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Content } from './Content'
import { SwitchTheme } from './layout/SwitchTheme'

export function Header() {
	return (
		<header className="w-full h-[100px] flex justify-center items-center bg-[#222]">
			<Content className="flex items-center justify-between gap-4/">
				<h1 className="text-2xl font-bold text-white">
					<Link href="/">Mercado Dev</Link>
				</h1>
				<ul className="flex items-center gap-2">
					<HeaderButton>
						<SwitchTheme />
					</HeaderButton>
					<HeaderButton>
						<Link
							href="/purchase"
							className="w-full h-full flex items-center justify-center"
						>
							<ShoppingCart className="h-20 w-2h-20 text-zinc-200" />
						</Link>
					</HeaderButton>
				</ul>
			</Content>
		</header>
	)
}

function HeaderButton(props: { children: ReactNode }) {
	return (
		<li className="flex items-center justify-center rounded-xl space-x-2 cursor-pointer w-12 h-12 transition-all hover:bg-zinc-800">
			{props.children}
		</li>
	)
}
