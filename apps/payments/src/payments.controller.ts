import { Controller } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { PaymentStatus } from './entities/payment.entity'
import { PaymentsService } from './payments.service'

@Controller()
export class PaymentsController {
	constructor(private readonly paymentsService: PaymentsService) {}

	@EventPattern('create_order')
	async payment(
		@Payload() message: { price: number; order_id: string; product_id: string },
	): Promise<void> {
		await this.paymentsService.payment({
			amount: message.price,
			order_id: message.order_id,
			product_id: message.product_id,
			status: PaymentStatus.APPROVED,
		})
	}
}
