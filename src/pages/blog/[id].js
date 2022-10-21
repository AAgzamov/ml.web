import React from "react"
import {useRouter} from "next/router"

export default () => {
    const router = useRouter()
    const {id} = router.query
    if (id === "0") {
        return (
            <div>
                ID
            </div>
        )
    } else {

    }
}