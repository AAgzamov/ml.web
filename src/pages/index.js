import React from "react"
import Head from "next/head"
import MenuWrapper from "../components/MenuWrapper"
import ThemeButton from "../components/ThemeButton"
import HomeWrapper from "../components/HomeWrapper"
import ProgressBar from "../components/ProgressBar";

export default function Index() {
    return (
        <>
            <Head>
                <meta name="keywords" content="ml, ai, machine learning,
                artificial intelligence, [0 | 1], 0 or 1 Uzbekistan, 0 or 1 uzb, 0 or 1 machine learning,
                machine learning organization in uzbekistan, artificial intelligence in uzbekistan,
                ml courses uzbekistan, ai courses uzbekistan, data science uzbekistan"
                />
                <meta name="description" content="[0 | 1] Machine Learning Organization Website"/>
                <title>[0 | 1] &nbsp;&nbsp;&nbsp; Home</title>
            </Head>
            <MenuWrapper/>
            <ThemeButton/>
            <HomeWrapper/>
            <ProgressBar />
        </>
    )
}
