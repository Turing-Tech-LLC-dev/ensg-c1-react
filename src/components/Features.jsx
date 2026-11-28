import { useEffect, useState } from "react";
import SectionIntro from "./SectionIntro";

function Features() {
    const [secs, setSecs] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setSecs(prev => prev + 1), 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <SectionIntro 
                title="Our Features" 
                subTitle="Explore the core functionalities of our app"
            />

            <div>Timer: {secs} seconds</div>
        </div>
    )
}

export default Features;