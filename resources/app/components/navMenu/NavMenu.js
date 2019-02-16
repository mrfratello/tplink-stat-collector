import {NavLink} from 'react-router-dom'


const NavMenu = () =>
    <ul>
        <li>
            <NavLink to='/'
                     exact
                     activeStyle={{
                         fontWeight: 'bold',
                         color: 'red'
                     }}>Stored Address List
            </NavLink>
        </li>
    </ul>

export default NavMenu