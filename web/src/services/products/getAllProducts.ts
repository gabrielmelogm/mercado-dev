import axios from 'axios'
import { productSchema } from './getProject'

const productsSchema = productSchema.array()

export async function getAllProjects() {
	const response = await axios.get(`${process.env.APP_PRODUCTS_URL}/products`)
	const products = productsSchema.parse(response.data)

	return products
}
