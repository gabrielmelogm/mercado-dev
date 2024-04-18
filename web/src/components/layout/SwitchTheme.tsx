'use client'

import { Sun } from 'lucide-react'
import { useEffect } from 'react'

export function SwitchTheme() {
	function onChangeTheme(): void {
		const getLocalColorScheme = getStorageColorScheme()

		if (getLocalColorScheme === 'light') {
			localStorage.setItem('colorScheme', 'dark')
			setColorScheme('dark')
		}

		if (getLocalColorScheme === 'dark') {
			localStorage.setItem('colorScheme', 'light')
			setColorScheme('light')
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

	function getStorageColorScheme(): 'light' | 'dark' | null {
		const colorScheme = localStorage.getItem('colorScheme') as
			| 'light'
			| 'dark'
			| null

		return colorScheme
	}

	function setColorScheme(colorScheme: 'dark' | 'light'): void {
		const el = document.querySelector('html')

		el?.classList.remove('dark')
		el?.classList.remove('light')

		el?.classList.add(colorScheme)
	}

	useEffect(() => {
		const storageColorScheme = getStorageColorScheme()

		if (!storageColorScheme) {
			const colorScheme = getColorScheme()
			setColorScheme(colorScheme)
			localStorage.setItem('colorScheme', colorScheme)
		}

		if (storageColorScheme) {
			setColorScheme(storageColorScheme)
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
