import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './Button.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundStyle: 'filled' | 'outline' | 'none' | 'pt'
}

export function Button({ backgroundStyle, ...props }: PropsWithChildren<ButtonProps>) {
    return (
        <button {...props} className={props.className ?? "" + " " + backgroundStyle}/>
    )
}