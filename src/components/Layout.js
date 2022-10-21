import React from "react"
import {ParallaxLayer} from "@react-spring/parallax"
import Footer from "./Footer"


export default function Layout({children, footerOffset, footerSpeed}) {
    return (
        <>
            {children}
            <ParallaxLayer offset={footerOffset} speed={footerSpeed}>
                <Footer />
            </ParallaxLayer>

        </>
    )
}