
function WelcomeMessage() {
    const handleClick = () => {
        alert("Welcome to event handling in React!");
    };

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    const handleAddTwoNumbers = (x, y) => {
        console.log(x + y);
    }

    return (
        <div className="bg-blue-600 py-10 px-6 rounded-3xl flex flex-col gap-4 w-fit">
            <h2 className="font-bold text-white">Welcome to Events Handling in React.</h2>

            <p className="text-white">
                We are happy to have you here.
            </p>

            <input 
                type="text" 
                placeholder="Tell us why you love React"
                className="border border-white/50 h-10 text-white placeholder:text-sm px-3"
                onChange={handleChange}
            />

            <div className="flex gap-4">
                <button 
                    onClick={handleClick}
                    className="bg-yellow-200 cursor-pointer py-1.5 px-4 self-start"
                >
                    Click to say Welcome
                </button>

                <button 
                    className="bg-white/60 cursor-pointer py-1.5 px-4 self-start"
                    onClick={() => handleAddTwoNumbers(33, 66)}
                >
                    Sum Two Numbers
                </button>
            </div>
        </div>
    )
}

export default WelcomeMessage;