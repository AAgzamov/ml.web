import React from "react"
// import {useSpring, animated} from "react-spring";
import {Theme} from "../context/ThemeContext"
import {DarkModeSwitch} from "react-toggle-dark-mode"

export default function ThemeButton() {
    // const orientation = typeof window !== "undefined" ? window.screen.orientation.type : null
    const {theme, clickHandler} = React.useContext(Theme)
    // const [translateValue, updateTranslateValue] = React.useState({})
    // const appearStyle = useSpring({
    //     from: {transform: "translateY(-40vh)"}, to: {transform: "translateY(0vh)"},
    //     config: {bounce: 3, tension: 500},
    // })
    // const style = useSpring({
    //     // transform: theme === "light" ? "translateY(0vh)" : orientation === "landscape-primary" ?
    //     //     "translateY(-8vh)" : "translateY(-12vh)",
    //     transform: theme === "light" ? "translateY(0vh)" : "translateY(-8vh)",
    //     config: {bounce: 2, tension: 500},
    // })
    // const objStyle = useSpring({
    //     stroke: theme === "light" ? "black" : "white",
    //     config: {duration: 1000}
    // })
    // useEffect(() => {
    //     if (window.innerWidth < 1000) {
    //         updateTranslateValue({start: "translateY(0px)", end: "translateY(-50px)"})
    //     } else {
    //         updateTranslateValue({start: "translateY(0vh)", end: "translateY(-8vh)"})
    //     }
    //     api.start({
    //         transform: theme === "light" ? translateValue.start : translateValue.end,
    //         config: {bounce: 2, tension: 500},
    //     })
    // }, [])

    // function click() {
    //     api.start({
    //         transform: theme === "light" ? translateValue.start : translateValue.end,
    //         config: {bounce: 2, tension: 500},
    //     })
    //     clickHandler()
    // }

    return (
        // <animated.div className="theme-button" onClick={clickHandler} style={appearStyle}>
        //     <animated.svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20" style={style}>
        //         <animated.path style={objStyle} className="moon-svg"
        //                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        //     </animated.svg>
        //     <animated.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={style}>
        //         <animated.g style={objStyle} className="sun-svg">
        //             <circle cx="12" cy="12" r="5"/>
        //             <line x1="12" y1="1" x2="12" y2="3"/>
        //             <line x1="12" y1="21" x2="12" y2="23"/>
        //             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        //             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        //             <line x1="1" y1="12" x2="3" y2="12"/>
        //             <line x1="21" y1="12" x2="23" y2="12"/>
        //             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        //             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        //         </animated.g>
        //     </animated.svg>
        // </animated.div>
            <DarkModeSwitch
                className="theme-button"
                style={{ marginBottom: '2rem' }}
                checked={theme === "light"}
                onChange={clickHandler}
                size={120}
                moonColor="black"
                sunColor="white"
                animationProperties={{
                    springConfig: { mass: 4, tension: 600, friction: 35 },
                }}
            />
    )
}