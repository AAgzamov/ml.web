import React, {useEffect} from "react"
import {useSpring, animated} from "react-spring"

export default () => {
    const [teampageJoinStyle, api] = useSpring(() => ({
        opacity: 0, config: {duration: 600}
    }))

    function callback(entries, observer) {
        entries.forEach(entry => {
            entry.isIntersecting && api.start({opacity: 1}) && observer.unobserve(entry.target)
        })
    }

    const options = { threshold: .6, delay: 300 }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector(".teampage__join-team-wrapper"))
    }, [])
    return (
        <animated.div className="teampage__join-team-wrapper" style={teampageJoinStyle}>
            <div>
                Want to join our team?
            </div>
            <div>
                Contact &nbsp;
                <a href="mailto:mlcommunity.uz@gmail.com"
                   className="simple-link" style={{fontWeight: "bold"}}>
                    mlcommunity.uz@gmail.com
                </a>
            </div>
        </animated.div>
    )
}