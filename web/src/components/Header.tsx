import { SettingsMenu } from '@/components/SettingsMenu'
import { Input } from '@/components/ui/input'

export function Header() {
	return (
		<header className="w-full h-[100px] flex justify-center items-center dark:bg-gray-900">
			<div className="w-full max-w-[1200px] flex justify-between gap-4">
				<h1 className="text-3xl font-bold">Mercado Dev</h1>
				<div className="w-full max-w-[588px]">
					<Input type="search" name="search" placeholder="Buscar produtos" />
				</div>
				<div>
					<SettingsMenu />
				</div>
			</div>
		</header>
	)
}
