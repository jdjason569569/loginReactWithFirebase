import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../signUp/signUp.css';
import auth from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [error, setError] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const registro = () => {
        if (!values.name || !values.email || !values.pass) {
            setError("Diligencie todos los campos");
            return;
        }
        setError("");
        setSubmitButtonDisabled(true);
        
    }

    return (
        <h1>Registro</h1>
    )
}