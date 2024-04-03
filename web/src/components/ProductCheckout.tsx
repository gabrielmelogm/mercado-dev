'use client'
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function ProductCheckout() {
  const [ quantity, setQuantity ] = useState<number>(1)

  function addQuantity() {
    setQuantity(quantity + 1)
  }

  function minQuantity() {
    if (quantity === 1) return

    setQuantity(quantity - 1)
  }

  return (
    <div>
      <div className="flex items-center gap-4 py-8">
        <Button variant='ghost' className="p-0 h-0" disabled={quantity === 1} onClick={minQuantity}>
          <CircleMinus />
        </Button>
        <span>
          {quantity}
        </span>
        <Button variant='ghost' className="p-0 h-0" onClick={addQuantity}>
          <CirclePlus />
        </Button>
      </div>
  
      <Button>Comprar agora</Button>
    </div>
  )
}