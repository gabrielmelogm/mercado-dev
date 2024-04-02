'use client'

import { Sun } from 'lucide-react'
import { useEffect } from 'react'
import { DropdownMenuItem, DropdownMenuShortcut } from './ui/dropdown-menu'

export function SwitchTheme() {
	function onChangeTheme(): void {
		const getLocalColorScheme = localStorage.getItem('colorScheme')

		if (getLocalColorScheme === 'light') {
			localStorage.setItem('colorScheme', 'dark')
		}

		if (getLocalColorScheme === 'dark') {
			localStorage.setItem('colorScheme', 'light')
		}
	}

	function onKeyDown(e: any) {
		if (e.key === 't' || e.key === 'T') {
			onChangeTheme()
		}
	}

	function getColorScheme(): 'light' | 'dark' {
		if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
			return 'light'
		}

		if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
			return 'dark'
		}

		return 'light'
	}

	useEffect(() => {
		const colorScheme = getColorScheme()
		const getLocalColorScheme = localStorage.getItem('colorScheme')

		if (!getLocalColorScheme) {
			if (colorScheme) {
				localStorage.setItem('colorScheme', colorScheme)
			}

			if (!colorScheme) {
				localStorage.setItem('colorScheme', 'light')
			}
		}
	}, [])

	return (
		<DropdownMenuItem className="cursor-pointer">
			<Sun className="mr-2 h-4 w-4" />
			<div
				className="flex items-center space-x-2"
				onClick={onChangeTheme}
				onKeyDown={onKeyDown}
			>
				<span>Alterar tema</span>
			</div>
			<DropdownMenuShortcut>T</DropdownMenuShortcut>
		</DropdownMenuItem>
	)
}