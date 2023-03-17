import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/home';
import Login from '../components/login/login';
import SignUp from '../components/signUp/signUp';


export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/signup' element={<SignUp />}></Route>
            </Routes>
        </Router>
    );
}