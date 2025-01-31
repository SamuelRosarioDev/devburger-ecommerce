import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export default function UserLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}