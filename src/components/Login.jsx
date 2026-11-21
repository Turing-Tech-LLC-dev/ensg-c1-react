import { useState } from "react";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="flex flex-col gap-3 bg-white border border-black/50 w-full max-w-md mx-auto py-10 px-6">
            <h2 className="font-bold text-4xl">
                {isLoggedIn ? "Welcome back" : "Please log in to continue"}
            </h2>
            {
                isLoggedIn &&
                <p className="text-lg">You have successfully logged in</p>
            }

            {
                isLoggedIn ? 
                <button 
                    className="bg-blue-600 text-white py-2.5 px-8 cursor-pointer active:translate-y-2"
                    onClick={() => setIsLoggedIn(false)}
                >
                    Logout
                </button>
                :
                <button 
                    className="bg-blue-600 text-white py-2.5 px-8 cursor-pointer active:translate-y-2"
                    onClick={() => setIsLoggedIn(true)}
                >
                    Login
                </button>
            }
        </div>
    )
}

export default Login;