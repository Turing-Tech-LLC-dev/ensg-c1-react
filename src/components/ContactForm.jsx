function ContactForm() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data submitted successfully");
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-4xl">Contact Form</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="border border-black/50 h-10 placeholder:text-sm px-3"
                />

                <button type="submit" className="bg-yellow-200 cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;