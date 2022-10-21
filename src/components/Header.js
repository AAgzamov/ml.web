import React from "react"
import {useTrail, animated} from "react-spring"

export default function Header() {
    const titleText = ["[0 | 1]", "Machine", "Learning", "Organization"]
    const contentText = ["The", "first", "in", "Uzbekistan"]
    const trailTitle = useTrail(titleText.length, {
        from: {y: -500, opacity: 0}, to: {y: 0, opacity: 1}, delay: 700,
        // config: {bounce: .5, friction: 10, mass: 1.5}
        config: {tension: 300}
    })
    const trailContent = useTrail(contentText.length, {
        from: {opacity: 0, y: 1000}, to: {opacity: 1, y: 0}, delay: 900,
        // config: {friction: 20, bounce: 1}
        config: {tension: 300}
    })
    const classNames = ["header-wrapper"]
    return (
        <header className={classNames.join(" ")}>
            <div className="header-title">
                {/* key={index} because title text anc content text will not change */}
                {trailTitle.map((styles, index) => <animated.span key={index} style={styles}>
                    {titleText[index]}
                </animated.span>)}
                {/*[0 | 1] Machine Learning Organization*/}
            </div>
            <div className="header-content">
                {trailContent.map((styles, index) => <animated.span key={index} style={styles}>
                    {contentText[index]}&nbsp;
                </animated.span>)}
                {/*The first in Uzbekistan*/}
            </div>
        </header>
    )
}