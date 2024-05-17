import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <div className="container-fluid">
            <header className="row">
                <Navbar/>
            </header>

            <div className="row">
                {children}
            </div>

            <Footer/>
        </div>
    );
}

export default Layout;