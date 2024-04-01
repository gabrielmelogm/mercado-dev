import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'
import { PaymentDto } from './dto/payment.dto'
import { Payment } from './entities/payment.entity'
import { PaymentsRepository } from './repositories/payments.repository'

@Injectable()
export class PaymentsService {
	constructor(
		private readonly paymentsRepository: PaymentsRepository,
		@Inject('PAYMENTS_SERVICE')
		private readonly kafkaClient: ClientKafka,
	) {}

	async payment(order: PaymentDto): Promise<Payment> {
		const payed = await this.paymentsRepository.payment(order)

		await lastValueFrom(this.kafkaClient.emit('payments', payed))

		return payed
	}
}
