import { useNavigate } from 'react-router'
import './styles.css'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { getPoints } from './hooks/getPoints'

const Menu = () => {
    const nav = useNavigate()
    const [points, setPoints] = useState(0)
    getPoints(setPoints)
    return (
    <div className='menuContainer'>
        <ul className='menuList'>
            <li onClick={()=> nav('/dash')}>DashBoard</li>
            <li onClick={()=> nav('/game')}>Game</li>
        </ul>
        <div className='userData'>
            <span className='username'>Usuário: {getAuth().currentUser?.email}</span>
            <span>pontos: {points}</span>
        </div>
    </div>
)
}

export default Menu