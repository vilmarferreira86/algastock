import React from "react";
import './Button.css'

declare interface ButtonProps {
    content?: string
    children?: string
    onClick?: () => void
    appendIcon: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className="AppButton">
            { props.children || 'Nameless button'}
            { props.appendIcon }
        </button>
}

export default Button