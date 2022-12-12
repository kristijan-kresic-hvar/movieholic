import styles from './Navbar.module.scss'

import NavItem from '../NavItem/NavItem'

import logoSVG from '../../assets/img/logo.svg'
import arrowRightSVG from '../../assets/icons/arrow_right.svg'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img src={logoSVG} alt="logo illustration" />
            </div>
            <div className={styles.navbar__items}>
                <NavItem
                    text="Movies"
                />
                <NavItem
                    text="TV Shows"
                />
                <NavItem
                    text="Suggest me"
                    icon={arrowRightSVG}
                />
            </div>
        </div>
    )
}

export default Navbar