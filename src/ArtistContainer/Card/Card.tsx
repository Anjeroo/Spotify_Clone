import './Card.css'
type CardProps = { text: string, image: string }

export function Card({ text, image }: CardProps) {
    return (
        <div className="artist-card">
            <div className="card-img">
                <img src={image} className="artist-img" />
                <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div className="card-text">
                <a className="vst" href="#">
                    <span className="artist-name">{text}</span>
                    <span className="artist-categorie">Artista</span>
                </a>
            </div>
        </div >
    )
}