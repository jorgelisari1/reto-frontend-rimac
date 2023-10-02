import React from 'react';
import RoundButton from '../buttonRound';
import styles from './styles.module.scss';

type Props = {
    title: string,
    desc: string,
    icon: string,
    checked: boolean,
    setChecked(boolean): void 
}
const SimpleCardHome: React.FC<Props> = ({ title, desc, icon,  }) => {

    return <div className={styles.card}>
        <span className={styles.check}><RoundButton/></span>
        <div className={styles.content}>
        <span><img src={icon} alt="icono de salud"/></span>
        <span className={styles.title}>{title}</span>
        </div>
       
        <span className={styles.desc}>{desc}</span>
    </div>

};

export default SimpleCardHome;
