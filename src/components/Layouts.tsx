import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export function GlobalLayout({ children }) {
    return (
        <>
            <Header />       
            { children }
            <Footer />
        </>
    )
}
