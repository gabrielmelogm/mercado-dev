import { Request } from 'express'

export interface IRequest extends Request {
	headers: {
		authorization: string
		user: string
	}
}

export interface UserHeader {
	sub: string
	email: string
	iat: string
	exp: string
}
