import { useState } from "react";

function AddProductForm() {
    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        quantity: ""
    });

    // (inline)
    // setFormData((prev) => ({...prev, productName: e.target.value}))

    // Using handleChange function
    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev, 
            [field]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.productName || !formData.price || !formData.quantity) {
            console.log("Missing required fields");
            return;
        }

        console.log("Form data submitted successfully");
        console.log(formData);

        setFormData({
            productName: "",
            price: "",
            quantity: ""
        });
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-md">
            <h2 className="font-bold text-3xl">Add New Product</h2>

            <form 
                className="border py-10 px-6 rounded-3xl shadow-xl flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Enter product name" 
                    id="productName"
                    className="input"
                    value={formData.productName}
                    onChange={(e) => handleChange("productName", e.target.value)}
                    required
                />

                <input 
                    type="number" 
                    placeholder="Enter product price"
                    id="price"
                    className="input"
                    value={formData.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                />

                <input 
                    type="number" 
                    placeholder="Quantity"
                    id="quantity"
                    className="input"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                />

                <button type="submit" className="bg-blue-300 cursor-pointer px-8">Add Product</button>
            </form>
        </div>
    )
}

export default AddProductForm;