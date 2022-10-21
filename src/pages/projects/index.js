import React from "react"
import Head from "next/head"
import ProjectsWrapper from "../../components/ProjectsWrapper"
import MenuWrapper from "../../components/MenuWrapper"
import ThemeButton from "../../components/ThemeButton"
import ProgressBar from "../../components/ProgressBar";

export default function Projects() {
    return (
        <>
            <Head>
                <title>[0 | 1] &nbsp;&nbsp; Projects</title>
            </Head>
            <MenuWrapper />
            <ThemeButton />
            <ProjectsWrapper />
            <ProgressBar />
        </>
    )
}