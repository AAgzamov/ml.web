import React, {useEffect} from "react"
import {useTrail, animated} from "react-spring"

export default function Main() {
    const classNames = ["main-wrapper"]
    const text = ["Founded by a group of innovative and ambitious teens of Uzbekistan in 2021.",
        "We provide efficient solutions for enterprises and provide free courses on ML and AI.",
        "Our long-term goal is to contribute to the prosperity of ML and AI technologies in Uzbekistan."]
    const [trail, api] = useTrail(text.length, () => ({
        opacity: 0, y: "20vh",
        // config: {friction: 10, bounce: 1}
        config: {tension: 300}
    }))

    const options = { threshold: .5 }

    function callback(entries, observer) {
        entries.map(entry => {
            if (entry.isIntersecting) {
                api.start({opacity: 1, y: "0vh", delay: 400})
                observer.unobserve(entry.target)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector(".main-content"))
    }, [])


    return (
        <main className={classNames.join(" ")}>
            <div className="main-content">
                {trail.map((styles, index) => <animated.div key={index} style={styles}>{text[index]}
                </animated.div>)}
            </div>
        </main>
    )
}