import { SettingsMenu } from '@/src/components/layout/SettingsMenu'
import { Input } from '@/src/components/ui/input'
import Link from 'next/link'
import { Content } from './Content'

export function Header() {
	return (
		<header className="w-full h-[100px] flex justify-center items-center dark:bg-gray-900">
			<Content className="flex justify-between gap-4">
				<h1 className="text-3xl font-bold">
					<Link href="/">Mercado Dev</Link>
				</h1>
				<div className="w-full max-w-[588px]">
					<Input type="search" name="search" placeholder="Buscar produtos" />
				</div>
				<div>
					<SettingsMenu />
				</div>
			</Content>
		</header>
	)
}
