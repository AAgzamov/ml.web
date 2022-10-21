import React, {useEffect} from "react"
import {useSpring, animated} from "react-spring";
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import Layout from "./Layout"
import {Theme} from "../context/ThemeContext";
import ProjectsList from "./ProjectsList";

export default () => {
    const {theme} = React.useContext(Theme)
    const myRef = React.useRef(null)
    const [speedConfig, setSpeedConfig] = React.useState({layer: 1.5, bg: 3.3, arrow: .5})
    const [viewBox, setViewBox] = React.useState("4 5 8 8")
    const projectsInfoStyle = useSpring({
        from: {y: 1000, opacity: 0}, to: {y: 0, opacity: 1}, delay: 500, config: {tension: 100}
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
            setSpeedConfig({layer: 6.5, arrow: .5, bg: 10.3})
        } else if (window.innerHeight > 1200) {
            setSpeedConfig({layer: 4.5, arrow: .5, bg: 8.3})
        } else if (window.innerHeight > 656) {
            setSpeedConfig({layer: 2.5, arrow: .5, bg: 6.3})
        }
    }

    useEffect(() => {
        window.innerWidth <= 1000 && setViewBox("0 0 15 15")
        configureLayerSpeed()
    }, [])

    return (
        <Parallax pages={3} className={classNames.join(" ")} ref={myRef}>
            <Layout footerOffset={2} footerSpeed={3}>
                <ParallaxLayer speed={speedConfig.bg}>
                    <div className="parallax-background" style={{
                        width: "100vw", height: "100vh", opacity: ".2",
                        backgroundColor: theme === "light" ? "#bf00ff" : "#460269"
                    }}></div>
                </ParallaxLayer>
                <ParallaxLayer speed={speedConfig.layer}>
                    <animated.div className="projectspage__info" style={projectsInfoStyle}>
                        What is the purpose of our existence?
                        <br/>
                        We provide AI programs for anyone who either wants to ease their daily life with automated
                        programs or needs performant AI program to advance their enterprise.
                        <br/>
                        Moreover, we provide free courses on Machine Learning and Artificial Intelligence with the
                        purpose of sharing knowledge and promoting the AI trend in sunny Uzbekistan.
                    </animated.div>
                </ParallaxLayer>
                <ParallaxLayer offset={.85} speed={speedConfig.arrow}>
                    <div className="arrow-down-svg-wrapper" onClick={() => myRef.current.scrollTo(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down-svg" viewBox={viewBox}>
                            <path
                                           d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={speedConfig.bg} offset={1}>
                    <div className="parallax-background" style={{
                        width: "100vw", height: "100vh", opacity: ".2",
                        backgroundColor: theme === "light" ? "#bf00ff" : "#460269"
                    }}></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={speedConfig.layer}>
                    <ProjectsList />
                    {/*<div className="projectspage__projects">*/}
                    {/*    <div className="projects-title">What we have done so far... </div>*/}
                    {/*    <div className="projects education">*/}
                    {/*        <div className="projects-name">Education</div>*/}
                    {/*        <div className="projects-list">*/}
                    {/*            <ul>*/}
                    {/*                <li>*/}
                    {/*                    <a href="https://github.com/0or1-ML/ML-Road-Map" className="simple-link">*/}
                    {/*                        Roadmap*/}
                    {/*                    </a> for studying Machine Learning*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="https://www.youtube.com/watch?v=xT6YXMjTgKk*/}
                    {/*                    &list=PL3y4bvEfkQcmhJNp-7t6Q-iPNu-Xet10u"*/}
                    {/*                       className="simple-link">*/}
                    {/*                        Python Course*/}
                    {/*                    </a> in Uzbek Language*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    IT Podcasts on &nbsp;*/}
                    {/*                    <a href="https://www.youtube.com/c/SKEPTIKLAR" className="simple-link">*/}
                    {/*                        SKEPTIKLAR*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="projects companies">*/}
                    {/*        <div className="projects-name">Companies</div>*/}
                    {/*        <div className="projects-list">*/}
                    {/*            <ul>*/}
                    {/*                <li>*/}
                    {/*                    AI solution for&nbsp;*/}
                    {/*                    <a href="https://bellissimo.uz/" className="simple-link">*/}
                    {/*                        Bellissimo Pizza*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </ParallaxLayer>
                <ParallaxLayer offset={1.8} speed={speedConfig.arrow}>
                    <div className="arrow-down-svg-wrapper" onClick={() => myRef.current.scrollTo(2)}>
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