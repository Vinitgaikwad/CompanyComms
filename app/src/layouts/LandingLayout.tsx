import { Outlet } from "react-router-dom";
import LandingNav from "../global/LandingNav";

export default function LandingLayout() {
    return (
        <>
            <nav className="">
                <LandingNav></LandingNav>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}