import { ReactElement } from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export function GlobalLayout({ children }: { children: ReactElement }): ReactElement {
    return (
        <>
            <Header />       
            { children }
            <Footer />
        </>
    )
}
