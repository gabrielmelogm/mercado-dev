import { Settings, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { SwitchTheme } from './SwitchTheme'

export function SettingsMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<Settings />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
					<SwitchTheme />
					<DropdownMenuItem className="cursor-pointer">
						<ShoppingCart className="mr-2 h-4 w-4" />
						<Link href="/purchase">Pedidos</Link>
						<DropdownMenuShortcut>C</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
