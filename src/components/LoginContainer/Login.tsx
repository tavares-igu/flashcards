import { useNavigate } from 'react-router'
import './styles.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import firestore, { auth } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';

type PropsType = {
    header: string,
    buttonText: string,
    isSignUp?: boolean
}

const LoginContainer = (props: PropsType) => {
    const navigate = useNavigate();
    const {header, buttonText, isSignUp} = props
    const wrapper = isSignUp ? 'container signup' : 'container'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [authorized, setAuthorized] = useState('errorMsg authorized')

    const onSubmitCreate = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const uid = userCredential.user.uid
            console.log(user);
            await setDoc(doc(firestore, 'users', uid), {points: 1})
            .then(()=>console.log('Doc added'))
            .catch((e) => console.log(e))
            navigate("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }

    const onSubmitSignIn = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // podemos colocar o user no localStorage para nao precisar
            // fazer queries de userData nas outras paginas (uid/username)
            const user = userCredential.user;
            console.log(user);
            navigate("/dash")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            !isSignUp ? setAuthorized('errorMsg') : ''
        });
    }

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {isSignUp ? onSubmitCreate(e) : onSubmitSignIn(e)}

    return(
        <>
            <div className={wrapper}>
                <h2>{header}</h2>
                <label>Usuário</label>
                <input type='text' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                <label>Senha</label>
                <input type='password' placeholder='Senha'  onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={(e) =>{onSubmit(e)}}>{buttonText}</button>
                <span className={authorized}>Usuário ou senha errado(s)</span>
                
            </div>
        </>
    )
}
export default LoginContainer
