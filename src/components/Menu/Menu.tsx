import { useNavigate } from 'react-router'
import './styles.css'
import { getAuth, signOut } from 'firebase/auth'
import { useState } from 'react'
import { getPoints } from './hooks/getPoints'

const Menu = () => {
    const nav = useNavigate()
    const [points, setPoints] = useState(0)
    const auth = getAuth()

    const onClickSignOut = ()=>{
        signOut(auth)
        nav('/')
    }

    getPoints(setPoints)
    return (
    <div className='menuContainer'>
        <ul className='menuList'>
            <li onClick={()=> nav('/dash')}>DashBoard</li>
            <li onClick={()=> nav('/game')}>Game</li>
        </ul>
        <div className='userData'>
            <span className='username'>Usuário: {auth.currentUser?.email}</span>
            <span>pontos: {points}</span>
            <span className='signOut' onClick={onClickSignOut}>Sair</span>
        </div>
    </div>
)
}

export default Menu