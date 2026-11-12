

/* function ProductItem(props) {
    return (
        <div className="flex flex-col gap-4 border border-black/30 shadow-lg py-8 px-6 rounded-3xl bg-yellow-100">
            <h3 className="font-bold">{props.productName}</h3>

            <div className="flex justify-between">
                <span>{props.price}</span>
                <button>+</button>
            </div>
        </div>
    )
} */

import { ShoppingCartPlus } from "lucide-react";

function ProductItem({productName, price}) {
    return (
        <div className="flex flex-col gap-4 border border-black/30 shadow-lg py-8 px-6 rounded-3xl bg-yellow-100">
            <h3 className="font-bold">{productName}</h3>

            <div className="flex justify-between">
                <span>{price}</span>
                <button className=""><ShoppingCartPlus size={16} /></button>
            </div>
        </div>
    )
}

export default ProductItem;