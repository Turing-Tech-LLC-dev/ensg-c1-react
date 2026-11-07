import SoftwareWorkflow from "../assets/software_workflow.jpeg";

function Banner() {
    return (
        <div className="bg-cyan-700 w-fit py-10 px-6 flex flex-col gap-6">
            <h2 className="text-2xl lg:text-5xl text-white font-extrabold">React components</h2>

            <p className="text-white text-lg lg:text-xl">
                React components represents a portion of the user interface. 
            </p>

            <div className="w-full max-w-lg">
                <img src={SoftwareWorkflow} />
            </div>
        </div>
    )
}

export default Banner;