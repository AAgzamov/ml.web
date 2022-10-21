import React from "react"
import Head from "next/head"
import TeamWrapper from "../../components/TeamWrapper"
import MenuWrapper from "../../components/MenuWrapper"
import ThemeButton from "../../components/ThemeButton"
import ProgressBar from "../../components/ProgressBar";

export default function Team() {
    return (

        <>
            <Head>
                <title>[0 | 1] &nbsp; &nbsp;Team</title>
            </Head>
            <MenuWrapper />
            <ThemeButton />
            <TeamWrapper />
            <ProgressBar />
        </>



    )
}