import { Content } from '@/src/components/Content'
import { Table } from '@/src/components/Table/Table'

export default function Page() {
	return (
		<div className="w-full flex justify-center my-8">
			<Content>
				<Table />
			</Content>
		</div>
	)
}
