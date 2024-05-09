import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'
import { PaymentDto } from './dto/payment.dto'
import { Payment } from './entities/payment.entity'
import { PaymentsRepository } from './repositories/payments.repository'

@Injectable()
export class PaymentsService {
	constructor(
		private readonly paymentsRepository: PaymentsRepository,
		@Inject('PAYMENTS_SERVICE')
		private readonly rmqClient: ClientProxy,
	) {}

	async payment(order: PaymentDto): Promise<Payment> {
		const payed = await this.paymentsRepository.payment(order)

		await lastValueFrom(this.rmqClient.emit('payments', payed))

		return payed
	}
}
