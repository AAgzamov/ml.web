import React, {useEffect} from "react"
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import {Theme} from "../context/ThemeContext"
import Layout from "./Layout"
import BlogContainer from "./BlogContainer"

export default () => {
    const {theme} = React.useContext(Theme)
    const myRef = React.useRef(null)
    const [speedConfig, setSpeedConfig] = React.useState({layer: 1.5, bg: 3.3, arrow: .5})
    const classNames = ["global-wrapper", "global-wrapper-light"]
    const [viewBox, setViewBox] = React.useState("4 5 8 8")

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

    useEffect(() => {
        window.innerWidth <= 1000 && setViewBox("0 0 15 15")
        configureLayerSpeed()
    }, [])
    return (
        <Parallax pages={2} className={classNames.join(" ")} ref={myRef}>
            <Layout footerOffset={1} footerSpeed={3}>
                <ParallaxLayer speed={speedConfig.layer}>
                    <BlogContainer />
                </ParallaxLayer>
                <ParallaxLayer offset={.89} speed={speedConfig.arrow}>
                <div className="arrow-down-svg-wrapper" onClick={() => myRef.current.scrollTo(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down-svg" viewBox={viewBox}>
                        <path
                                       d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </div>
            </ParallaxLayer>
            </Layout>
        </Parallax>
    )
}