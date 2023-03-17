import { Link } from 'react-router-dom';
import '../login/login.css';


export default function Login() {
    return (
        <div className='container'>
            <div className='innerBox'>
                <h1 className='heading'>Login</h1>
                <div className='footer'></div>
                <b className='error'>Error</b>
                <button>login btn</button>
                <p>
                    Crear cuenta
                    <span>
                        <Link to="/signup">Ir</Link>
                    </span>
                </p>

            </div>
        </div>
    );
}