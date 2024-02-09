import React from "react"
import "./Header.css"
import smallRight from '../assets/icons/small-right.png'
import smallLeft from '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'
import artists from '../assets/artists.json'
import { Button } from "../Button/Button"
type HeaderProps = { setArtists: React.Dispatch<{ name: string, id: number, genre: string, urlImg: string }[]>, artistSearchRef: React.RefObject<HTMLInputElement> }

export const Header = ({ setArtists, artistSearchRef }: HeaderProps) => {
    function filterArtists(e: React.KeyboardEvent<HTMLInputElement>) {
        const filteredartists = artists.filter(a => a.name.toLocaleUpperCase().startsWith(e.currentTarget.value.toLocaleUpperCase()))
        setArtists(filteredartists)
    }
    return (
        <nav className="headerNavigation">
            <div className="navigation">
                <Button backgroundStyle="none">
                    <img src={smallLeft} alt="Seta Esquerda" />
                </Button>
                <Button backgroundStyle="none">
                    <img src={smallRight} alt="Seta Direita" />
                </Button>
            </div>
            <div className="headerSearch">
                <img src={search} />
                <input id="searchInput" ref={artistSearchRef} type="text" maxLength={800} placeholder="O que você quer ouvir?" onKeyUp={filterArtists} />
            </div>
            <div className="headerLogin">
                <Button backgroundStyle="outline">Inscreva-se</Button>
                <Button backgroundStyle="filled">Entrar</Button>
            </div>
        </nav>
    )
}
