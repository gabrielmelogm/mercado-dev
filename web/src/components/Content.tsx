import { ReactNode } from 'react'

export function Content(props: {
	children: ReactNode
	className?: string | undefined
}) {
	return (
		<div
			className={`w-full max-w-[1200px] my-0 mx-auto py-0 px-5 ${
				props.className ?? ''
			}`}
		>
			{props.children}
		</div>
	)
}
