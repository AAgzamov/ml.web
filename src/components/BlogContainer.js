import React, {useEffect} from "react"
import {useTrail, animated} from "react-spring"
import Link from "next/link"
import BlogItem from "./BlogItem"
import BlogZero from "../../public/img/blog/0.png"


export default () => {
    const blogTitles = ["How it began..."].reverse()
    let indexSource = []
    blogTitles.forEach((title, index) => indexSource.push(index))
    indexSource = indexSource.reverse()
    const imgSource = [BlogZero].reverse()
    const blogDate = ["Oct 01, 2022"].reverse()

    const [trail, api] = useTrail(1, () => ({
        y: "80vh", opacity: 0, config: {tension: 300}
    }))
    const options = { threshold: .5 }
    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                api.start({y: "0vh", opacity: 1, delay: 500})
                observer.unobserve(entry.target)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector(".blog-container"))
    }, [])

    return (
        <div className="blog-container">
            {trail.map((style, index) => (
                    <Link href={"/blog/" + `${indexSource[index]}`} key={index}>
                        <animated.a style={style}>
                            <BlogItem imgSrc={imgSource[index]} blogId={indexSource[index]}
                                      blogTitle={blogTitles[index]} blogDate={blogDate[index]}/>
                        </animated.a>
                    </Link>
                )
            )}
        </div>
    )
    // return (
    // <div className="blog-container">
    //     <BlogItem imgSrc={BlogZero} blogId="0" blogTitle=/>
    // </div>
    // )
}