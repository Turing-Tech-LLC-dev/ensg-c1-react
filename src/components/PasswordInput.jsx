import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordInput() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <div className="w-full max-w-120 border py-10 px-6">
            <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-bold">Password</label>
                <button 
                    className="cursor-pointer"
                    onClick={() => setIsPasswordVisible((prev => !prev))}
                >
                    {
                        isPasswordVisible ? 
                        <span className="text-sm flex gap-2"><EyeOff /> Hide</span>
                        : 
                        <span className="text-sm flex gap-2"><Eye /> Show</span>
                    }
                </button>
            </div>
            <input 
                type={isPasswordVisible ? "text" : "password"} 
                placeholder="•••••••••••"
                className="border h-10 px-2"
            />
        </div>
    )
}

export default PasswordInput