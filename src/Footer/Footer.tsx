import { Button } from '../Button/Button'
import './Footer.css'

export function Footer() {
    return (
        <div className="footer">
            <span className="premium">Testar o Premium de graça</span>
            <span className="premiumText">Inscreva-se para curtir música ilimitada e podcasts só com alghuns anúncios. Não
                precisa de cartão
                de crédito</span>
            <Button backgroundStyle='filled' className='subscri'>Inscreva-se grátis</Button>
        </div>
    )
}