import styles from './Header.module.scss';
import { useState } from 'react';
import cloudacademy from "../../assets/images/cloud.png";
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill">
                <img src={cloudacademy} alt="logo" />
            </div>
            <ul className={ styles.headerList}>
                <button className="mr-5 btn btn-reverse-primary">
                    <i className="fa-solid fa-heart mr-5"></i>
                    <span>Wishlist</span>
                </button>
                <button className="btn btn-primary">connexion</button>
            </ul>
            <i onClick={ () => setShowMenu(true)} className={`fa-solid fa-bars ${styles.headerXs}`}></i>
            { showMenu && 
                <>
                    <div onClick={ () => setShowMenu(false)} className='calc'></div>
                    <HeaderMenu /> 
                </>
            }
        </header>
    );
}

export default Header;