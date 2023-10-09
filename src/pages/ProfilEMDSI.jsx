import React from "react";
import Navbarr from "../components/Navbarr";
import HeaderEMDSI from "../components/EMDSI/HeaderEMDSI";
import CardEMDSI from "../components/EMDSI/CardEMDSI";
import Footer from "../components/Footer";

const Profil = () => {
    return (
        <div>
            <Navbarr />
            <div className="mt-36">
            <HeaderEMDSI />
            <CardEMDSI />
            <Footer />
            </div>

        </div>
    );
};

export default Profil;
