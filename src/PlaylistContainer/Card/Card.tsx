import './Card.css'
type CardProps = { text: string, backgroundColor: string, image: string }

export function Card({ text, backgroundColor, image }: CardProps) {
    return (
        <a href="" className={'card ' + backgroundColor}>
            <img src={image} alt="" />
            <span>{text}</span>
        </a>
    )
}