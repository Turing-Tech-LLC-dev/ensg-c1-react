import { useEffect, useState } from "react"
import StoreItem from "./StoreItem";

function StoreList() {
    const [products, setProducts] = useState(null);

/*     const fetchProducts = useCallback(async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }, []);

    useEffect(() => {
        const getProducts = () => fetchProducts();
        getProducts();
    }, [fetchProducts]); */

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(e => console.error(e));
    }, []);

    if (!products) {
        return <p className="text-3xl text-center font-bold text-blue-500">No products available...</p>
    } 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                products.map(product => (
                    <StoreItem 
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))
            }
        </div>
    )
}

export default StoreList;