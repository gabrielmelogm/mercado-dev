import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Injectable()
export class ProductsService {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll(): Promise<any[]> {
		return await this.prismaService.products.findMany();
	}
}
