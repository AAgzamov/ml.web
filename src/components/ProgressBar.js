import React, {useEffect} from "react"
import {useSpring, animated} from "react-spring"

export default () => {
    const [height, setHeight] = React.useState("1vh")
    const style = useSpring({ height, config: {tension: 300, friction: 20 }})
    function calculatePercentage() {
        const scrolledAmount = document.querySelector(".global-wrapper").scrollTop
        const maxScrollAmount = document.querySelector(".global-wrapper").scrollHeight
            - document.querySelector(".global-wrapper").offsetHeight
        let percent = Math.round((100 * scrolledAmount) / maxScrollAmount)
        percent === 0 ? percent = 1 : null
        setHeight(percent + "vh")
    }
    useEffect(() => {
        document.querySelector(".global-wrapper").addEventListener("scroll", calculatePercentage, true)
        document.querySelector(".global-wrapper").addEventListener("touchmove", calculatePercentage, true)

        return () => {
            document.querySelector(".global-wrapper")
                .removeEventListener("scroll", calculatePercentage)
            document.querySelector(".global-wrapper")
                .removeEventListener("touchmove", calculatePercentage)
        }
    }, [])
    return (
        <animated.div className="progress-bar" style={style}></animated.div>
    )
}