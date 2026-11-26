import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Unable to fetch products: ${response.status}`);
                }

                return response.json();
            })
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    if (!products) {
        return <p className="text-red-400 font-bold text-3xl">No Products available</p>
    }

    return (
        <ul>
            {
                products.map(product => (
                    <li>{product.title}</li>
                ))
            }
        </ul>
    )
}

export default Products;