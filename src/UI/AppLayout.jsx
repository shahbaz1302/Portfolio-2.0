import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer"

export const AppLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}