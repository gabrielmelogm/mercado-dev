import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../../dto/createUser.dto'
import { User } from '../../entities/user.entity'
import { PrismaService } from '../../prisma/prisma.service'
import { UsersRepository } from '../users.repository'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
	constructor(private readonly prisma: PrismaService) {}
	async CreateUser(user: CreateUserDto): Promise<User> {
		return await this.prisma.users.create({
			data: user,
		})
	}

	async GetUserById(id: string): Promise<User> {
		return await this.prisma.users.findFirst({
			where: {
				id,
			},
		})
	}

	async GetUserByEmail(email: string): Promise<User> {
		return await this.prisma.users.findFirst({
			where: {
				email,
			},
		})
	}
}
