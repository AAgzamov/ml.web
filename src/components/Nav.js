import React, {useEffect} from "react"
import Link from "next/link"
import {useTrail, animated} from "react-spring";


export default function Nav(props) {
    const classNames = ["nav-wrapper"]
    const text = ["Read our blog →",
        "Browse our projects and products →",
        "Get to know our team →",
        "Contact us ↓"]
    const urls = ["blog", "projects", "team"]
    const [trail, api] = useTrail(text.length, () => ({
        x: "110vw",
        opacity: 0,
        // config: {friction: 10, bounce: .7}
        config: {tension: 300}
    }))
    const options = {
        threshold: .5
    }

    function callback(entries, observer) {
        entries.map(entry => {
            if (entry.isIntersecting) {
                api.start({x: "0vw", opacity: 1, delay: 400})
                observer.unobserve(entry.target)
            }
        })
    }



    useEffect(() => {
        document.querySelectorAll("#color-fill")[3].addEventListener("click", () => {
            props.myRef.current.scrollTo(3)
        })
        const observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector(".nav-wrapper"))
    }, [])

    return (
        <nav className={classNames.join(" ")}>
            {trail.map((styles, index) => {
                if (index === 3) {
                    return <animated.div key={index} className="nav-link" style={styles}>
                        <a id="color-fill" val={text[index]}>{text[index]}</a>
                    </animated.div>
                } else {
                    return <animated.div key={index} className="nav-link" style={styles}>
                        <Link href={"/" + `${urls[index]}`}>
                            <a id="color-fill" val={text[index]}>{text[index]}</a>
                        </Link>
                    </animated.div>
                }
            })}
        </nav>
    )
}