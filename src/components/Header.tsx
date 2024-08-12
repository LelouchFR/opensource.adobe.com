import { ReactElement, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdobeLogo from "../assets/svg/adobe.svg";
import BurgerMenu from "../assets/svg/burger-menu.svg";
import CrossMenu from "../assets/svg/cross.svg";
import GridMenu from "../assets/svg/menu-grid.svg";

export default function Header(): ReactElement {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [innerWidth]);

    return width > 900 ? <DesktopHeader /> : <PhoneHeader />
}

function PhoneHeader(): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState<bool>(false);

    return (
        <header>
            <div>
                <img 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src={isMenuOpen ? CrossMenu : BurgerMenu}
                />
                <Link to="/">
                    <img src={AdobeLogo} />
                    <p>Adobe</p>
                </Link>
            </div>
            <div>
                <img src={GridMenu} />
                <button>Sign in</button>
            </div>
        </header>
    )
}

function DesktopHeader(): ReactElement {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={AdobeLogo} />
                    <p>Adobe Open Source</p>
                </Link>
                <nav>
                    {["Creativity & Design", "Marketing & Commerce", "Help & Support"].map((summary: string, index: number): ReactElement => 
                        <details key={index}>
                            <summary>{summary}</summary>
                            <section></section>
                        </details>
                    )}
                </nav>
            </div>
            <div>
                <img src={GridMenu} />
                <button>Sign in</button>
            </div>
        </header>
    )
}
