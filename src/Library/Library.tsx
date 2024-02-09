import { Button } from "../Button/Button"
import "./Library.css"

export function Library() {
    return (
        <div className="library">
            <div className="libraryContent">
                <button className="libraryButton">
                    <span className="fa fas fa-book"></span>
                    <span>Sua blibioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>
            <section className="sectionPlaylist">
                <div className="sectionPlaylistContent">
                    <span className="text title">Crie sua Primeira Playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar</span>
                    <Button backgroundStyle="filled" >Criar Playlist</Button>
                </div>
            </section>
            <div className="cookies">
                <a href="">cookies</a>
            </div>
            <div className="languages">
                <Button backgroundStyle="pt">
                    <span className="fa fa-globe"></span>
                    <span> Português do Brasil</span>
                </Button>
            </div>
        </div>
    )
}