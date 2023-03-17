import { Link } from "react-router-dom"



export default function Home({name}) {
    return (
        <>
            <div>
                <h1><Link to="/login">Login</Link></h1>
                <br />
                <h1><Link to="/signup">SingUp</Link></h1>
            </div>
            <h2>{name? `Bienvenido - ${name}`:"Inicia session"}</h2>
        </>
    )
}