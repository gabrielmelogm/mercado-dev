import { z } from 'zod'
import { statusTranslation } from './getAllOrders'

const CustomStatusEnum = z.custom((val) => {
	// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
	if (statusTranslation.hasOwnProperty(val)) {
		return z.string().parse(statusTranslation[val])
	}
	return z.enum(['PENDENTE', 'PAGO', 'CANCELADO']).parse(val)
})
