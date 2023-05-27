import LoginContainer from '../../components/LoginContainer/Login'
import './styles.css'
const Login = () => {


    return(
    <div className='wraper'>
        <LoginContainer header='Login' buttonText='Entrar'/>
        <LoginContainer header='Cadastre-se' buttonText='Cadastrar' isSignUp/>
    </div>)
}

export default Login