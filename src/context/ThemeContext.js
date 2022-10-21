import React, {startTransition, useEffect} from "react";

const Theme = React.createContext("")

function ThemeProvider(props) {
    const [theme, setTheme] = React.useState("dark")

    function clickHandler() {
        theme === "dark" ? setTheme("light") : setTheme("dark")
        const keyframes =
            theme === "light" ?
                [
                    {backgroundColor: "#f0f0f0", color: "black", fill: "black", borderColor: "black"},
                    {backgroundColor: "black", color: "white", fill: "white", borderColor: "white"}
                ] : [
                    {backgroundColor: "black", color: "white", fill: "white", borderColor: "white"},
                    {backgroundColor: "#f0f0f0", color: "black", fill: "black", borderColor: "black"}
                ]
        const timing = {
            duration: 1000,
            animationTimingFunction: "ease-in-out",
            iteration: 1,
        }
        const keyframesMenu =
            theme === "light" ?
                [
                    {color: "black", fill: "black"},
                    {color: "white", fill: "white"}
                ] : [
                    {color: "white", fill: "white"},
                    {color: "black", fill: "black"}
                ]
        const keyframesParallaxBackground =
            theme === "light" ?
                [
                    {backgroundColor: "#bf00ff"},
                    {backgroundColor: "#460269"}
                ] : [
                    {backgroundColor: "#460269"},
                    {backgroundColor: "#bf00ff"}
                ]
        const keyframesFooterParallaxBackground =
            theme === "light" ?
                [
                    {backgroundColor: "#f0f0f0"}, {backgroundColor: "black"}
                ] : [
                    {backgroundColor: "black"}, {backgroundColor: "#f0f0f0"}
                ]
        document.querySelector(".global-wrapper").animate(keyframes, timing)
        for (let i = 0; i < document.querySelectorAll(".menu-svg-bar").length; i++) {
            document.querySelectorAll(".menu-svg-bar")[i].animate(keyframes, timing)
        }
        document.querySelector(".menu-wrapper").animate(keyframesMenu, timing)
        for (let i = 0; i < document.querySelectorAll(".parallax-background").length; i++) {
            document.querySelectorAll(".parallax-background")[i].animate(keyframesParallaxBackground, timing)
        }
        try {
            document.querySelector(".footer-parallax-background").animate(keyframesFooterParallaxBackground, timing)
        } catch (e) {
            console.log("Footer Parallax Background (TeamWrapper.js) is not mounted")
        }
    }

    useEffect(() => {
        startTransition(() => {
            if (window.localStorage.getItem("theme")) {
                setTheme(window.localStorage.getItem("theme"))
            }
        })
    }, [])
    useEffect(() => {
        window.localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <Theme.Provider value={{theme, clickHandler}}>
            {props.children}
        </Theme.Provider>
    )
}

export {Theme, ThemeProvider}
