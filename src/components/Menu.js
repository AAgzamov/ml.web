import React, {useEffect} from "react"
import Link from "next/link";
import {useSpring, useTrail, animated} from "react-spring"
import {Theme} from "../context/ThemeContext"

export default function Menu(props) {
    const [backdropFilter, setBackdropFilter] = React.useState("blur(3vw)")
    const classNames = ["menu-wrapper", "light"]
    const urls = ["", "blog", "projects", "team"]

    // Handling the click on the active link.
    function linkClickHandler(e) {
        if (document.URL === e.target.href) {
            e.preventDefault()
            props.menuButtonClickHandler()
        }
    }

    const {theme} = React.useContext(Theme)
    if (theme === "light") {
        classNames.pop()
        classNames.push("light")
    } else {
        classNames.pop()
        classNames.push("dark")
    }
    const style = useSpring({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        zIndex: 2,
        top: 0,
        backdropFilter,
        overflow: "hidden",
        width: props.isOpen ? "100vw" : "0vw",
        height: props.isOpen ? "100vh" : "0vh",
        borderBottomRightRadius: props.isOpen ? "0px" : "80vw",
        loop: false,
        delay: 200,
        // config: { tension: 500, bounce: props.isOpen ? 1 : 0,}
        config: {tension: 300, bounce: 0}
    })
    const nav = ["Home →", "Blog →", "Projects & Products →", "Team →"]
    const [trail, api] = useTrail(nav.length, () => ({
        y: "-110vh",
        opacity: 0,
        // config: {friction: 10, bounce: 1}
        config: {tension: 200}
    }))
    let count = 0
    if (props.seen) {
        if (count === 0) {
            api.start({y: "0vh", opacity: 1, delay: 500})
        }
    }
    useEffect(() => {
        window.innerWidth <= 900 && setBackdropFilter("10vw")
        document.querySelector(".menu-wrapper").addEventListener("scroll", e => {
            props.isOpen && e.preventDefault()
        })
    }, [])
    return (
        <animated.div className={classNames.join(" ")} style={style}>
            {trail.map((styles, index) => (
                <animated.div key={index} style={styles}>
                <Link href={"/" + `${urls[index]}`} >
                    <a id="menu-color-fill" val={nav[index]} onClick={linkClickHandler}>{nav[index]}</a>
                </Link>
                </animated.div>
            ))}
        </animated.div>
    )
}