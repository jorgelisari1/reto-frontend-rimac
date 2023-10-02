import React from 'react';
import LogoRimac from '../../assets/images/Logo-rimac.svg';
import LogoRimacVertical from '../../assets/images/Logo-rimac-vertical.svg'
import useResponsive from '../../hooks/use-responsive';
import styles from './styles.module.scss'


const Footer: React.FC = () => {

    const {isTablet} = useResponsive();

    return <div className={styles.footer}>
       {isTablet &&<img src={LogoRimacVertical} alt=" logo rimac texto vertical" className={styles.logoVertical} />}
       {!isTablet && <img src={LogoRimac} alt="logo rimac texto" className={styles.logo}/>}
       <span>© 2023 RIMAC Seguros y Reaseguros.</span>
    </div>

};

export default Footer;
