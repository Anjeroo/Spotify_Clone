import logo from '../assets/icons/logo-spotify.png'
import { Link } from './Link/Link'
import "./SidebarNavigation.css"

export function SidebarNavigation() {
    return (
        <nav className="sidebarNavigation">
            <div className="logo">
                <a href=""><img src={logo} alt="Logo do Spotify" /></a>
            </div>
            <ul>
                <li>
                    <Link icon='fa fa-home' text='Início' />
                </li>
                <li>
                    <Link icon='fa fa-search' text='Buscar' />
                </li>
            </ul>
        </nav>
    )
}