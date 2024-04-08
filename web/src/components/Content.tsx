import { ReactNode } from 'react'

export function Content(props: {
	children: ReactNode
	className?: string | undefined
}) {
	return (
		<div className={`w-full max-w-[1200px] ${props.className ?? ''}`}>
			{props.children}
		</div>
	)
}
