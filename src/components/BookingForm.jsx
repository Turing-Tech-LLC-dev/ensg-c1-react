import { useState } from "react";

function BookingForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    function handleFullNameChange(event) {
        setFullName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-md">
            <h2 className="font-bold text-3xl">Registration Form</h2>

            <form className="border py-10 px-6 rounded-3xl shadow-xl flex flex-col gap-4">
                <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="input"
                    value={fullName}
                    onChange={handleFullNameChange}
                />

                <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="input"
                    value={email}
                    onChange={handleEmailChange}
                />
            </form>
        </div>
    )
}

export default BookingForm;