import './ArtistContainer.css'
import { Card } from './Card/Card'
type ArtistContainerProps = {
    artists: { name: string, id: number, genre: string, urlImg: string }[]
}

export function ArtistContainer({ artists }: ArtistContainerProps) {
    return (
        <div id="result-artist" className={'grid-container ' + (artists.length == 0 ? "hidden" : "")}>
            {artists.map(artist => (<Card text={artist.name} image={artist.urlImg} key={artist.id} />))}
        </div>
    )
}
