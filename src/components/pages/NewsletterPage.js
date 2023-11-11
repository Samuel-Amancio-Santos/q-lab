import NewsletterCards from "../NewsletterComponents/NewsletterCards"
import NewsletterComp from "../NewsletterComponents/NewsletterComp"
import '../NewsletterComponents/NewsletterComp.css'
import { Contact } from "../homePageComponents/Contact"
import { Newsletter } from "../homePageComponents/Newsletter"



function NewsletterPage () {
    return (
     <>
         <NewsletterComp />
         <NewsletterCards />
     </>
    )
}

export default NewsletterPage