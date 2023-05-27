import { useNavigate } from 'react-router'
import './styles.css'
import { getAuth } from 'firebase/auth'

const Menu = () => {
    const nav = useNavigate()
    return (
    <div className='menuContainer'>
        <ul className='menuList'>
            <li onClick={()=> nav('/dash')}>DashBoard</li>
            <li onClick={()=> nav('/game')}>Game</li>
        </ul>
        <span className='username'>Usuário: {getAuth().currentUser?.email}</span>
    </div>
)
}

export default Menu