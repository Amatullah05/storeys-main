import Header from "../../shared/Header/Header"
import Footer from "../../shared/Footer/Footer"
import Banner from "../../shared/Banner/Banner"
import { useState } from "react"
import { contactBanner } from "../../../utils/static/bannerData"
import FormSection from "../../shared/Form/FormSection"
import Frame from "../../shared/Frame/Frame"
import InfoSection from "./Helpers/InfoSection"
import { contactFrame } from "../../../utils/static/frameData"

const ContactUs = () => {

    const [height, setHeight] = useState(0)

  return (
    <>
        <Header height={setHeight} />
        <Banner title={contactBanner.title} description={contactBanner.description} isFilter={false} isBtn={false} bg={contactBanner.bg} width={contactBanner.width} height={contactBanner.height} marginTop="100"   />
        <Frame frame={contactFrame} Component={InfoSection} />
        <FormSection />
        <Footer />
    </>
  )
}

export default ContactUs