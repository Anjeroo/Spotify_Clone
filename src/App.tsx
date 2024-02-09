
import { useRef, useState, useEffect } from 'react'
import './App.css'
import { Header } from './Header/Header'
import { SidebarNavigation } from './SidebarNavigation/SidebarNavigation'
import { Library } from './Library/Library'
import { PlaylistContainer } from './PlaylistContainer/PlaylistContainer'
import { Footer } from './Footer/Footer'
import { ArtistContainer } from './ArtistContainer/ArtistContainer'


function App() {
  const [artists, setArtists] = useState<{ name: string, id: number, genre: string, urlImg: string }[]>([])
  const [showPlaylists, setShowPlaylists] = useState<boolean>(true)
  const artistSearchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (artistSearchRef?.current?.value) {
      setShowPlaylists(false)
    }

    else {
      setShowPlaylists(true)
    }
  }, [artistSearchRef.current?.value])
  return (
    <>
      <div className="gridPageFormat">
        <div className="sidebar">
          <SidebarNavigation />
          <Library />
        </div>
        <main>
          <div className='scrollable'>
            <Header setArtists={setArtists} artistSearchRef={artistSearchRef} />
            <PlaylistContainer showPlaylists={showPlaylists} />
            {!showPlaylists && <ArtistContainer artists={artists} />}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
