import { FaHamburger } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { useGlobalContext } from '../../Hooks/Context';

const Header = () => {
    const {open} = useGlobalContext();
    const navigate = useNavigate();

    return(
        <header className="master">
            <div className="logo">
                <h4 className="logo-t"
                    onClick={()=>{
                        navigate("/")
                    }}
                >Da-Hubb Fund</h4>
            </div>
            <FaHamburger className='menu'
                onClick={open}
            />
        </header>
    )
}

export default Header;