import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request, Response } from 'express'
import { AuthService } from '../services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const httpContext = context.switchToHttp()
		const request: Request = httpContext.getRequest()
		const response: Response = httpContext.getResponse()

		if (!request.headers.authorization) {
			response.status(401).send({ error: 'not authorized' })
			return false
		}

		const token = request.headers.authorization.split('Bearer ')[1]

		const user = await this.authService.revalidateToken(token)

		if (!user) {
			response.status(401).send({ error: 'not authorized' })
			return false
		}

		request.headers['user'] = JSON.stringify(user)

		return true
	}
}
