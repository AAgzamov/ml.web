import React from "react"
import Head from "next/head"
import MenuWrapper from "../../components/MenuWrapper"
import ThemeButton from "../../components/ThemeButton"
import BlogWrapper from "../../components/BlogWrapper"
import ProgressBar from "../../components/ProgressBar";

export default function Blog() {
    return (
        <>
            <Head>
                <title>[0 | 1] &nbsp;&nbsp; Blog</title>
            </Head>
            <MenuWrapper/>
            <ThemeButton />
            <BlogWrapper />
            <ProgressBar />
        </>
    )
}