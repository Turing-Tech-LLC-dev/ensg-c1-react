import { Menu as Hamburger } from "lucide-react";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <div>
            <header className="border border-black/50 h-20 flex items-center px-8 justify-between">
                <span className="font-bold text-3xl">React</span>

                <button 
                    className="cursor-pointer"
                    onClick={toggleMenu}
                >
                    <Hamburger size={30} />
                </button>
            </header>

            {
                isMenuOpen && 
                <Menu />
            }
        </div>
    )
}

export default Header;