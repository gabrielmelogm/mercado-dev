import { CreateUserDto } from '../dto/createUser.dto'
import { User } from '../entities/user.entity'

export abstract class UsersRepository {
	abstract CreateUser(user: CreateUserDto): Promise<User>
	abstract GetUserById(id: string): Promise<User>
	abstract GetUserByEmail(email: string): Promise<User>
}
