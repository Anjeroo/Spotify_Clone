import './PlaylistContainer.css'
import card1 from '../assets/playlist/1.jpeg'
import card2 from '../assets/playlist/2.png'
import card3 from '../assets/playlist/3.jpeg'
import card4 from '../assets/playlist/4.jpeg'
import card5 from '../assets/playlist/5.jpeg'
import card6 from '../assets/playlist/6.jpeg'
import card7 from '../assets/playlist/7.jpeg'
import card8 from '../assets/playlist/8.jpeg'
import card9 from '../assets/playlist/9.jpeg'
import card10 from '../assets/playlist/10.jpeg'
import card11 from '../assets/playlist/11.jpeg'
import card12 from '../assets/playlist/12.jpeg'
import card13 from '../assets/playlist/13.jpeg'
import card14 from '../assets/playlist/14.jpeg'
import card15 from '../assets/playlist/15.jpeg'
import { Card } from './Card/Card'
type PlaylistContainerProps = { showPlaylists: true | false }


export function PlaylistContainer({ showPlaylists }: PlaylistContainerProps) {
    return (
        <div className={'playlist-container' + (!showPlaylists ? ' hidden' : '')}>
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <Card backgroundColor='card1' image={card1} text='Boas Festas' />
                            <Card backgroundColor='card2' image={card2} text='Feitos para você' />
                            <Card backgroundColor='card3' image={card3} text='Lançamentos' />
                            <Card backgroundColor='card4' image={card4} text='Creators' />
                            <Card backgroundColor='card5' image={card5} text='Para treinar' />
                            <Card backgroundColor='card6' image={card6} text='Podcasts' />
                            <Card backgroundColor='card7' image={card7} text='Sertanejo' />
                            <Card backgroundColor='card8' image={card8} text='Samba e pagode' />
                            <Card backgroundColor='card9' image={card9} text='Funk' />
                            <Card backgroundColor='card10' image={card10} text='MPB' />
                            <Card backgroundColor='card11' image={card11} text='Rock' />
                            <Card backgroundColor='card12' image={card12} text='HipHop' />
                            <Card backgroundColor='card13' image={card13} text='Indie' />
                            <Card backgroundColor='card14' image={card14} text='Relax' />
                            <Card backgroundColor='card15' image={card15} text='Música Latina' />
                        </section>
                    </div>
                </div>
            </div>

        </div>
    )
}