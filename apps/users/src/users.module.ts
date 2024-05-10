import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaService } from './prisma/prisma.service'
import { PrismaUsersRepository } from './repositories/implements/prismaUsers.repository'
import { UsersRepository } from './repositories/users.repository'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
	imports: [PrismaModule],
	controllers: [UsersController],
	providers: [
		UsersService,
		PrismaService,
		{
			provide: UsersRepository,
			useClass: PrismaUsersRepository,
		},
	],
})
export class UsersModule {}
