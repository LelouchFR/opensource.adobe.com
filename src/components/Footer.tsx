import { ReactElement, useState, useEffect } from "react";
import World from "../assets/svg/world.svg";
import footerData from "../assets/json/footer.json";
import "../assets/styles/footer.scss";

export default function Footer(): ReactElement {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [innerWidth]);

    return width > 900 ? <DesktopFooter /> : <PhoneFooter />
}

function DesktopFooter(): ReactElement {
    return (
        <footer>
            <div>
                {footerData.map((structs: FooterData[], i: number) =>
                    <section key={i} className={`st${i}`}>
                        <h3>{structs[0].title}</h3>
                        <ul>
                            {structs.map((struct: FooterData, j: number) =>
                                j > 0 ? <li key={j}><a href={struct.link}>{struct.title}</a></li> : <></>
                            )}
                        </ul>
                    </section>
                )}
            </div>
            <hr />
            <div>
                <p>Featured products</p>
            </div>
            <hr />
        </footer>
    )
}

function PhoneFooter(): ReactElement {
    return (
        <footer>
            <div>
                {footerData.map((structs: FooterData[], i: number) => 
                    <details key={i}>
                        <summary>{structs[0].title}</summary>
                        <ul>
                            {structs.map((struct: FooterData, j: number) =>
                                j > 0 ? <li key={j}><a href={struct.link}>{struct.title}</a></li> : <></>
                            )}
                        </ul>
                    </details>
                )}
            </div>
            <div>
                <img src={World} />
                <select id="region-select">
                    <option value="">Change region</option>
                    <option value="en">English</option>
                    <option value="fr">France</option>
                </select>
            </div>
            <div>
                <p>Copyright &copy; Adobe. <a href="https://github.com/adobe/adobe.github.com/blob/master/MIT-LICENSE.txt">website license</a></p>
            </div>
        </footer>
    )
}
