import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "../services/products.service";

@Controller()
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get('products')
  async getAllProducts() {
    return await this.productsService.getProducts()
  }

	@Get('product/get/:id')
	async getProductById(@Param('id') id: string) {
		return await this.productsService.getProductById(id)
	}

  @Get('/product/recommended')
  async getRecommendedProduct() {
    return await this.productsService.getRecommendedProduct()
  }

  @Post('products')
  async createProduct(@Body() product) {
    return await this.productsService.createProduct(product)
  }
}
