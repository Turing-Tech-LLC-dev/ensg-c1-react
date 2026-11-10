import ProductItem from "./ProductItem";

function ProductList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8 w-full">
          <ProductItem 
            productName="Laptop"
            price="$1500"
          />
          <ProductItem 
            productName="Female Hand bag"
            price="$500"
          />
          <ProductItem 
            productName="Ceramic Mug"
            price="$50"
          />
        </div>
    )
}

export default ProductList;