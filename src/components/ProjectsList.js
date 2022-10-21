import React, {useEffect} from "react"
import {useTrail, animated} from "react-spring"

export default () => {
    const [trailConfig, updateTrailConfig] = React.useState({
        y: 500
    })
    const [trail, api] = useTrail(2, () => ({
        y: trailConfig.y, opacity: 0, config: {tension: 100}
    }))
    function configureTrail() {
        updateTrailConfig({y: window.innerHeight - 100})
    }
    const options = { threshold: .5}
    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                api.start({y: 0, opacity: 1, delay: 300})
                observer.unobserve(entry.target)
            }
        })
    }

    useEffect(() => {
        configureTrail()
        const observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector(".projectspage__projects"))
    }, [])
    return (
        <div className="projectspage__projects">
            <div className="projects-title">What we have done so far... </div>
            {trail.map((styles, index) => {
                if (index === 0) {
                    return (
                        <animated.div className="projects education" key={index} style={styles}>
                            <div className="projects-name">Education</div>
                            <div className="projects-list">
                                <ul>
                                    <li>
                                        <a href="https://github.com/0or1-ML/ML-Road-Map" className="simple-link">
                                            Roadmap
                                        </a> for studying Machine Learning
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/watch?v=xT6YXMjTgKk
                                        &list=PL3y4bvEfkQcmhJNp-7t6Q-iPNu-Xet10u"
                                           className="simple-link">
                                            Python Course
                                        </a> in Uzbek Language
                                    </li>
                                    <li>
                                        IT Podcasts on &nbsp;
                                        <a href="https://www.youtube.com/c/SKEPTIKLAR" className="simple-link">
                                            SKEPTIKLAR
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </animated.div>
                    )
                }
                return (
                    <animated.div className="projects companies" key={index} style={styles}>
                        <div className="projects-name">Companies</div>
                        <div className="projects-list">
                            <ul>
                                <li>
                                    AI solution for&nbsp;
                                    <a href="https://bellissimo.uz/" className="simple-link">
                                        Bellissimo Pizza
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </animated.div>

                )
            })}
        </div>
    )

}