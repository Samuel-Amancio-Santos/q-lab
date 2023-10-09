import React from "react";
import { NavBar } from '../NavBar';
import { Banner } from '../homePageComponents/Banner'
import { Time } from '../homePageComponents/Time'
import { Newsletter } from '../homePageComponents/Newsletter';
import { Contact } from '../homePageComponents/Contact';
import { Footer } from '../Footer';
import { Demostracao } from "../homePageComponents/Demostracao";

function HomePage () {
    return (
        <div>
         <NavBar />
         <Banner />
         <Demostracao />
         <Newsletter />
         <Time />
         <Contact />
         <Footer />
        </div>
    )
}

export default HomePage