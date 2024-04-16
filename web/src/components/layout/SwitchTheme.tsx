'use client'

import { Sun } from 'lucide-react'
import { useEffect } from 'react'

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
		<>
			<div
				className="flex items-center space-x-2 cursor-pointer w-12 h-12"
				onClick={onChangeTheme}
				onKeyDown={onKeyDown}
			>
				<Sun className="mr-2 h-28 w-h-28 text-white" />
			</div>
		</>
	)
}
