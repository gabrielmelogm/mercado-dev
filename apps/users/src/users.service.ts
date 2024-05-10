import { Injectable } from '@nestjs/common'
import { hashSync } from 'bcrypt'
import { CreateUserDto } from './dto/createUser.dto'
import { UsersRepository } from './repositories/users.repository'

@Injectable()
export class UsersService {
	constructor(private readonly usersRepository: UsersRepository) {}

	async CreateUser(user: CreateUserDto) {
		const hashedPassword = hashSync(user.password, 10)

		const newUser: CreateUserDto = {
			email: user.email,
			password: hashedPassword,
		}

		return await this.usersRepository.CreateUser(newUser)
	}

	async GetUserById(id: string) {
		return await this.usersRepository.GetUserById(id)
	}

	async GetUserByEmail(email: string) {
		return await this.usersRepository.GetUserByEmail(email)
	}
}
