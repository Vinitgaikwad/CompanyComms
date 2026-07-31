import { Link } from "react-router-dom";

export default function LandingNav() {
    return (
        <>
            <div className="w-full shadow-md h-20 bg-blue-400">
                <div className="flex justify-around">
                    Logo
                </div>
                <div className="">
                    <span>Features</span>
                    <span>Features</span>
                    <span>Features</span>
                    <span>Features</span>
                </div>
                <div className="">
                    <Link to={"/user/signup"}></Link>
                </div>
            </div>
        </>
    )
}