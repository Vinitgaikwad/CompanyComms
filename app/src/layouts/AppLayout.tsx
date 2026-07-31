import { Outlet } from "react-router-dom";
import LandingNav from "../global/LandingNav";

export default function AppLayout() {
    return (
        <>
            <nav>
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