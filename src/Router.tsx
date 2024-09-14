import { ReactElement } from "react";
import { Location, Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Home.tsx";
import CLA from "./CLA.tsx";
import { GlobalLayout } from "./components/Layouts.tsx";

export default function Router(): ReactElement {
    const location: Location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<GlobalLayout><Home /></GlobalLayout>}/>
            <Route path="/cla" element={<GlobalLayout><CLA /></GlobalLayout>}/>
        </Routes>
   )
}
