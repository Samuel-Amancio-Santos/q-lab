import React from "react";
import { NavBar } from '../NavBar';
import { Banner } from '../Banner'
import { Time } from '../Time'
import { Skills } from '../Skills';
import { Newsletter } from '../Newsletter';
import { Contact } from '../Contact';
import { Footer } from '../Footer';

function HomePage () {
    return (
        <div>
         <NavBar />
         <Banner />
         <Skills />
         <Newsletter />
         <Time />
         <Contact />
         <Footer />
        </div>
    )
}

export default HomePage