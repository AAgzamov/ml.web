import "../../public/css/index.css"
import "../../public/css/team.css"
import "../../public/css/projects.css"
import "../../public/css/blog.css"
import {ThemeProvider} from "../context/ThemeContext"

export default function MyApp({ Component, pageProps }) {
    return (
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
    )
}