import { Settings } from 'lucide-react'
import { SwitchTheme } from './SwitchTheme'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

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
					{/* <DropdownMenuItem className="cursor-pointer">
						<Sun className="mr-2 h-4 w-4" />
						<SwitchTheme />
						<DropdownMenuShortcut>T</DropdownMenuShortcut>
					</DropdownMenuItem> */}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
