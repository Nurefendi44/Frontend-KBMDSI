import React from "react";
import Navbarr from "../components/Navbarr";
import HeaderBPMDSI from "../components/BPMDSI/HeaderBPMDSI";
import CardBPMDSI from "../components/BPMDSI/CardBPMDSI";
import Footer from "../components/Footer";

const ProfilBPMDSI = () => {
    return (
        <div>
            <Navbarr />
            <div className="mt-36">
            <HeaderBPMDSI />
            <CardBPMDSI />
            <Footer />
            </div>

        </div>
    );
};

export default ProfilBPMDSI;
