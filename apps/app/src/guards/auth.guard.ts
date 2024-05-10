import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const httpContext = context.switchToHttp()
		const request: Request = httpContext.getRequest()
		const response: Response = httpContext.getResponse()

		// response.status(401).send({ error: 'not authorized' })
		// return false

		// TO-DO logic for auth
		return true
	}
}
