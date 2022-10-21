import React, {useEffect} from "react"
import {useSpring, animated} from "react-spring"
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import {Theme} from "../context/ThemeContext"
import Layout from "./Layout"
import Placeholder from "/public/img/profile/placeholder.png"
import AdamSaidov from "/public/img/profile/AdamSaidov.jpg"
import ShakhriyorKhudayberdiev from "/public/img/profile/ShakhriyorKhudayberdiev.jpg"
import JasurbekMamurov from "/public/img/profile/JasurbekMamurov.jpg"
import AmirkhonAgzamov from "/public/img/profile/AmirkhonAgzamov.jpg"
import AsadbekMakhmudov from "/public/img/profile/AsadbekMakhmudov.jpg"
import AzimbekIsmatullaev from "/public/img/profile/AzimbekIsmatullaev.jpg"
import AzizLatipov from "/public/img/profile/AzizLatipov.jpg"
import FakhriddinImbragimov from "/public/img/profile/FakhriddinIbragimov.jpg"

import KhusanKadirov from "/public/img/profile/KhusanKadirov.jpg"
import RashidZaynutdinov from "/public/img/profile/RashidZaynutdinov.png"
import JoinTeam from "./JoinTeam";
import SupremeGallery from "./SupremeGallery";
import CoreGallery from "./CoreGallery";

// Supreme Council Info
const supremeCouncilUrls = [ShakhriyorKhudayberdiev, Placeholder, AdamSaidov, JasurbekMamurov]
const supremeCouncilNames = ["Shakhriyor Khudayberdiev", "Mashkhura Eshmatova", "Adam Saidov", "Jasurbek Mamurov"]
const supremeCouncilRoles = ["Head of the Organization", "Educational Affairs Manager", "External Affairs Manager",
    "Internal Affairs Manager"]

// Core Team Info
const coreTeamUrls = [AmirkhonAgzamov, AsadbekMakhmudov, AzimbekIsmatullaev, AzizLatipov, FakhriddinImbragimov,
    KhusanKadirov, RashidZaynutdinov, Placeholder, Placeholder]
const coreTeamNames = ["Amirkhon Agzamov", "Asadbek Makhmudov", "Azimbek Ismatullaev", "Aziz Latipov",
    "Fakhriddin Imbragimov", "Khusan Kadirov", "Rashid Zaynutdinov", "Placeholder", "Placeholder"]
const coreTeamRoles = ["Web Developer", "Data Scientist", "Marketer", "Data Scientist", "Data Scientist",
    "Data Scientist", "Data Scientist", "Placeholder", "Placeholder"]

export default () => {
    const {theme} = React.useContext(Theme)
    const myRef = React.useRef(null)
    const [speedConfig, setSpeedConfig] = React.useState({layer: 1.5, arrow: .5, bg: 3.3})
    const classNames = ["global-wrapper", "global-wrapper-light"]
    if (theme === "light") {
        classNames.pop()
        classNames.push("global-wrapper-light")
    } else {
        classNames.pop()
        classNames.push("global-wrapper-dark")
    }

    function configureLayerSpeed() {
        if (window.innerHeight > 2000) {
            setSpeedConfig({layer: 6.5, bg: 10.3, arrow: .5})
        } else if (window.innerHeight > 1200) {
            setSpeedConfig({layer: 4.5, bg: 8.3, arrow: .5})
        } else if (window.innerHeight > 656) {
            setSpeedConfig({layer: 2.5, bg: 6.3, arrow: .5})
        }
    }

    const teampageInfoStyle = useSpring({
        from: {y: 1000, opacity: 0}, to: {y: 0, opacity: 1}, delay: 500, config: {tension: 100}
    })


    // innerHeight = 656
    useEffect(() => {
        configureLayerSpeed()
    }, [])

    return (
        // pages={8}
        <Parallax className={classNames.join(" ")} pages={7} ref={myRef}>
            {/* footerOffset={7} */}
            <Layout footerSpeed={2} footerOffset={6}>
                {/* speed={1.5} */}
                <ParallaxLayer speed={speedConfig.bg}>
                    <div className="parallax-background" style={{
                        width: "100vw",
                        height: "100vh",
                        opacity: ".2",
                        backgroundColor: theme === "light" ? "#bf00ff" : "#460269"
                    }}></div>
                </ParallaxLayer>
                {/* speed={3} */}
                <ParallaxLayer speed={speedConfig.layer}>
                    <animated.div className="teampage__info" style={teampageInfoStyle}>
                        Our team is a group of open-minded and
                        friendly enthusiasts that are
                        dedicated in investing their time and knowledge in the
                        development of AI and ML infrastructure in Uzbekistan.
                        <br/><br/>
                        The team consists of
                        "<span style={{textDecoration: "underline #bf00ff .2vw"}}>Supreme Council</span>",
                        "<span style={{textDecoration: "underline #bf00ff .2vw"}}>Core Team</span>", and
                        "<span style={{textDecoration: "underline #bf00ff .2vw"}}>General Community</span>"
                        sub-groups.
                    </animated.div>
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    {/*<Gallery galleryTitle="Supreme Council" imageUrl={supremeCouncilUrls}*/}
                    {/*         galleryAlt="Supreme Council Member Photo" memberName={supremeCouncilNames}*/}
                    {/*         memberRole={supremeCouncilRoles} id="supreme"/>*/}
                    <SupremeGallery galleryTitle="Supreme Council" imageUrl={supremeCouncilUrls}
                             galleryAlt="Supreme Council Member Photo" memberName={supremeCouncilNames}
                             memberRole={supremeCouncilRoles} id="supreme"/>
                </ParallaxLayer>
                <ParallaxLayer offset={3}>
                    {/*<Gallery galleryTitle="Core Team" imageUrl={coreTeamUrls}*/}
                    {/*         galleryAlt="Core Team Member Photo" memberName={coreTeamNames}*/}
                    {/*         memberRole={coreTeamRoles} id="core" />*/}
                    <CoreGallery galleryTitle="Core Team" imageUrl={coreTeamUrls}
                             galleryAlt="Core Team Member Photo" memberName={coreTeamNames}
                             memberRole={coreTeamRoles} id="core"/>
                    <JoinTeam/>
                </ParallaxLayer>
                <ParallaxLayer offset={6} speed={1.5}>
                    <div className="footer-parallax-background" style={{
                        width: "100vw",
                        height: "100vh",
                        opacity: "1",
                        backgroundColor: theme === "light" ? "#f0f0f0" : "black",
                    }}></div>
                </ParallaxLayer>

            </Layout>
        </Parallax>
    )
}