import { Inject, Injectable } from "@nestjs/common";
import { SERVICE } from "../config/services.enum";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ProductsService {
  constructor(
    @Inject(SERVICE.PRODUCTS)
    private readonly productsServiceClient: ClientProxy
  ) {}

  async getProducts() {
    const products = await firstValueFrom(
      this.productsServiceClient.send('get_products', {})
    )

    return products
  }

  async getProductById(id: string) {
    const product = await firstValueFrom(
      this.productsServiceClient.send('get_product_by_id', id)
    )

    return product
  }

  async getRecommendedProduct() {
    const product = await firstValueFrom(
      this.productsServiceClient.send('get_recommended_product', {})
    )

    return product
  }

  async createProduct(product) {
    const newProduct = await firstValueFrom(
      this.productsServiceClient.send('create_product', product)
    )

    return newProduct
  }
}