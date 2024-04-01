import { Injectable } from '@nestjs/common'
import { PaymentDto } from '../../dto/payment.dto'
import { Payment, PaymentStatus } from '../../entities/payment.entity'
import { PrismaService } from '../../prisma/prisma.service'
import { PaymentsRepository } from '../payments.repository'

@Injectable()
export class PrismaPaymentsRepository implements PaymentsRepository {
	constructor(private readonly prisma: PrismaService) {}

	async payment(order: PaymentDto): Promise<Payment> {
		return await this.prisma.payment.create({
			data: order,
		})
	}
}
