import { Minus, Plus } from "lucide-react";
import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(prevCount => prevCount + 1);
    }

    function decreaseCount() {
        if (count <= 0) {
            return;
        }

        setCount(prevCount => prevCount - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div className="border-2 py-8 px-4 flex flex-col gap-4 w-fit">
            <h2 className="font-bold">React Counter</h2>
            <span className="font-extrabold text-5xl">{count}</span>
            <p className="bg-yellow-400 py-4 px-8 font-bold text-4xl">
                {count > 5 ? "Count is above 5" : "Count is Lower than 5"}
            </p>

            <div className="flex gap-4">
                <button 
                    className="bg-amber-300 cursor-pointer px-8"
                    onClick={increaseCount}
                >
                    <Plus />
                </button>

                <button 
                    className="bg-green-500 cursor-pointer px-8"
                    onClick={decreaseCount}
                >
                    <Minus />
                </button>

                <button 
                    className="bg-blue-300 cursor-pointer px-8"
                    onClick={resetCount}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter;