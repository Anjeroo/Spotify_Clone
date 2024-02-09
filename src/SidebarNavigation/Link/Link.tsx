import './Link.css'

export function Link({
    icon, text
}: {
    icon: string, text: string
}) {
    return (
        <a href="">
            <i className={icon}></i> <span>{text}</span>
        </a>
    )
}