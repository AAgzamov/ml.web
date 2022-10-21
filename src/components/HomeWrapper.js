import React, {useEffect} from "react"
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import {Theme} from "../context/ThemeContext"
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";

export default () => {
    const myRef = React.useRef(null)
    const {theme} = React.useContext(Theme)
    const [viewBox, setViewBox] = React.useState("4 5 8 8")
    const [speedConfig, setSpeedConfig] = React.useState({
        layer: 1.5, arrow: .5, bg: 3.3
    })
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
            setSpeedConfig({layer: 7.5, arrow: .5, bg: 14.3})
            // setArrowSpeed(6.5)
        } else if (window.innerHeight > 1500) {
            setSpeedConfig({layer: 6.5, arrow: .5, bg: 13.3})
          // setBgSpeed(13.3)
        } else if (window.innerHeight > 1200) {
            setSpeedConfig({layer: 4.5, arrow: .5, bg: 8.3})
            // setArrowSpeed(4.5)
        } else if (window.innerHeight > 656) {
            setSpeedConfig({layer: 2.5, arrow: .5, bg: 5.3})
            // setArrowSpeed(2.5)
        }
    }

    // Original values:
    // layerSpeed = 1.5, arrowSpeed = .5, bgSpeed = 3.3
    // const layerSpeed = Number((viewH / 437.3).toFixed(1))
    // const arrowSpeed = Number((layerSpeed / 3).toFixed(1))
    // const bgSpeed = Number((layerSpeed / .45).toFixed(1))

    useEffect(() => {
        window.innerWidth <= 1000 && setViewBox("0 0 15 15")
        configureLayerSpeed()
        // setLayerSpeed(Number((window.visualViewport.height / 437.5).toFixed(1)))
        // setArrowSpeed(Number((layerSpeed / 3).toFixed(1)))
        // setBgSpeed(Number((layerSpeed / .45).toFixed(1)))
    }, [])

    return (
        <Parallax className={classNames.join(" ")} pages={4} ref={myRef}>
            <ParallaxLayer className="header-parallax" speed={speedConfig.layer}>
                <Header/>
            </ParallaxLayer>
            {/*<ParallaxLayer offset={.7} speed={-2} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 8vw"}} src="/svg/linux.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            {/*<ParallaxLayer offset={.5} speed={2.3} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 80vw"}} src="/svg/robot1.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            {/*<ParallaxLayer offset={1.1} speed={2.5} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 94vw"}} src="/svg/robot.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            <ParallaxLayer offset={.8} speed={speedConfig.arrow}>
                <div className="arrow-down-svg-wrapper" onClick={() => myRef.current.scrollTo(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down-svg" viewBox={viewBox}>
                        <path
                                       d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={speedConfig.bg}>
                <div className="parallax-background" style={{
                    width: "100vw",
                    height: "100vh",
                    opacity: ".2",
                    backgroundColor: theme === "light" ? "#bf00ff" : "#460269"
                }}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={speedConfig.layer}>
                <Main/>
            </ParallaxLayer>
            {/*<ParallaxLayer offset={1.999} speed={2.5} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 10vw"}} src="/svg/satellite.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            {/*<ParallaxLayer offset={1.999} speed={-.5} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 16vw"}} src="/svg/robot2.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            <ParallaxLayer offset={1.8} speed={speedConfig.arrow}>
                <div className="arrow-down-svg-wrapper" onClick={() => myRef.current.scrollTo(2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down-svg" viewBox={viewBox}>
                        <path
                                       d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={speedConfig.bg}>
                <div className="parallax-background" style={{
                    width: "100vw",
                    height: "100vh",
                    opacity: ".2",
                    backgroundColor: theme === "light" ? "#bf00ff" : "#460269"
                }}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={speedConfig.layer}>
                <Nav myRef={myRef}/>
            </ParallaxLayer>
            {/*<ParallaxLayer offset={2.5} speed={2.5} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 80vw"}} src="/svg/jsbin.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            <ParallaxLayer offset={2.999} speed={speedConfig.arrow}>
                <div className="arrow-down-svg-wrapper" onClick={() => myRef.current.scrollTo(3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down-svg" viewBox={viewBox}>
                        <path
                                       d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </div>
            </ParallaxLayer>
            {/*<ParallaxLayer offset={3.1} speed={3.5} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 94vw"}} src="/svg/monitor.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            {/*<ParallaxLayer offset={3.5} speed={3} style={{zIndex: "-1", display: "none"}}>*/}
            {/*    <img style={{width: "5vw", margin: "0 7vw"}} src="/svg/python.svg" alt=""/>*/}
            {/*</ParallaxLayer>*/}
            <ParallaxLayer offset={3} speed={speedConfig.layer}>
                <Footer/>
            </ParallaxLayer>
        </Parallax>
    )
}