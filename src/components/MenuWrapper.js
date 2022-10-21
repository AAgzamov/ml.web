import React from "react"
import Menu from "./Menu";
import MenuButton from "./MenuButton";

export default () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [seen, setSeen] = React.useState(false)
    function menuClickHandler() {
        setIsMenuOpen(!isMenuOpen)
        setSeen(true)
    }
    return (
        <>
            <Menu isOpen={isMenuOpen} seen={seen} menuButtonClickHandler={menuClickHandler}/>
            <MenuButton isOpen={isMenuOpen} clickHandler={menuClickHandler}/>
        </>
    )
}