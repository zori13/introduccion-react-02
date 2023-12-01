import { Link } from 'react-router-dom'
export default function NotFound(){
    return(
        <div>
            <h1>
                Erroooooooor 404 - Página no encontrada
            </h1>
            <Link to="/">Inicio</Link>
        </div>
    )
}