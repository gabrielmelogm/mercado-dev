import { IsNotEmpty, IsString } from 'class-validator'

export class GetNotificationsDto {
	@IsString()
	@IsNotEmpty()
	userId: string
}
