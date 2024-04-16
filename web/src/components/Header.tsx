import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
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
					<li>
						<SwitchTheme />
					</li>
					<li>
						<Link href="/purchase" className="w-12 h-12">
							<ShoppingCart className="mr-2 h-20 w-2h-20 text-white" />
						</Link>
					</li>
				</ul>
			</Content>
		</header>
	)
}
