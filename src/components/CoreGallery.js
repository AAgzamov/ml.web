import React, {useEffect} from "react"
import {useSpring, animated, useTrail} from "react-spring"
import Image from "next/image"


export default ({galleryTitle, imageUrl, galleryAlt, memberName, memberRole, id}) => {
    const [trail, api] = useTrail(imageUrl.length, () => ({
        x: "100vw", opacity: 0, config: {tension: 150}
    }))

    const options = { threshold: .1 }
    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                api.start({x: "0vw", opacity: 1, delay: 300})
                observer.unobserve(entry.target)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector("#core"))
    }, [])

    return (
        <div className="teampage__gallery-wrapper" id={id}>
            <div className="teampage__title">{galleryTitle}</div>
            <div className="teampage__gallery">
                {trail.map((style, index) => (
                    <animated.div className="teampage__gallery-item" key={index} style={style}>
                        <div className="teampage__gallery-photo-wrapper">
                            <Image className="teampage__gallery-photo" src={imageUrl[index]}
                                   alt={galleryAlt} placeholder="blur" layout="fill"
                                   title={memberName[index]}
                                // objectFit="cover"
                                // objectPosition="0 0"
                            />
                        </div>
                        <div className="teampage__gallery-bio">
                            <div className="teampage__gallery-name">{memberName[index]}</div>
                            <div className="teampage__gallery-role">{memberRole[index]}</div>
                        </div>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}