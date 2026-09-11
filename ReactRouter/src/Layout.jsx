import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// we also have one more way to route render
// use outlet where this is provided outerscope components are kept same while inner changes
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}