import { Html, Head, Main, NextScript } from 'next/document'
import React from "react"

export default function Document() {
    return (
        <Html>
            <Head>
                <title>[0 | 1] Organization</title>
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Baloo+2&display=swap"
                      rel="stylesheet"/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="../../img/favicon.ico"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
