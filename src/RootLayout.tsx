import { Outlet } from "react-router-dom";
import Navbar from "./componnent/small_componnent/Navbar";

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
