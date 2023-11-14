
import '../demoComponents/demostracao.css';
import DemoSection from "../demoComponents/DemoSection";
import { Newsletter } from '../homePageComponents/Newsletter';
import { Contact } from '../homePageComponents/Contact';



function DemoPage () {
    return (
        <>
           <DemoSection/>
           <Newsletter />
           <Contact />
        </>
    )
}

export default DemoPage