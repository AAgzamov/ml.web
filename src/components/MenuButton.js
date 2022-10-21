import React from "react"
import {useSpring, animated} from "react-spring"
import {Theme} from "../context/ThemeContext"

export default function MenuButton(props) {
    const classNames = ["menu-svg-bar", "light"]
    const {theme} = React.useContext(Theme)
    const appearStyle = useSpring({
        from: { transform: "translateY(-40vh)" },
        to: { transform: "translateY(0vh)" },
        // config: {bounce: 3, tension: 500}
        config: {tenstion: 300}
    })
    if (theme === "light") {
        classNames.pop()
        classNames.push("light")
    } else {
        classNames.pop()
        classNames.push("dark")
    }
    const first = useSpring({
        transform: props.isOpen ? "translate(10px, 6px) rotate(45deg)" : "translate(5px, 3px) rotate(0deg)",
        config: { tension: 350, }
    })
    const second = useSpring({
        opacity: props.isOpen ? "0" : "1",
        transform: props.isOpen ? "translate(-50px, 18px)" : "translate(5px, 18px)",
        config: { tension: 300 }
    })
    const third = useSpring({
        transform: props.isOpen ? "translate(5px, 34px) rotate(-45deg)" : "translate(5px, 36px) rotate(0deg)",
        config: { tension: 350, }
    })
    return (
        <animated.div className="menu-button" onClick={props.clickHandler} style={appearStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <animated.rect width="40" height="7" rx="3" style={first} className={classNames.join(" ")} />
                <animated.rect width="40" height="7" rx="3" style={second} className={classNames.join(" ")} />
                <animated.rect width="40" height="7" rx="3" style={third} className={classNames.join(" ")} />
            </svg>
        </animated.div>
    )
}