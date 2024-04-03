import Image from "next/image"
import { getProject } from "../services/products/getProject"
import { ProductCheckout } from "./ProductCheckout"

export async function ProductDashboard(props: {id: string}) {
  const product = await getProject(props.id)

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="w-full grid grid-cols-2 gap-2">
          <Image src={product.thumb} alt={product.title} width={512} height={384} className="border rounded-xl" />
          <div className="self-center flex flex-col gap-2">
            <h3 className="text-3xl font-bold">{product.title}</h3>
            <h4 className="text-sm text-zinc-400">R$ {product.price}</h4>
            <p className="text-sm text-zinc-400">{product.description}</p>

            <ProductCheckout />
          </div>
        </div>
      </div>
    </div>
  )
}