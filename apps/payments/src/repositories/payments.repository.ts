import { PaymentDto } from '../dto/payment.dto'
import { Payment } from '../entities/payment.entity'

export abstract class PaymentsRepository {
	abstract payment(order: PaymentDto): Promise<Payment>
}
