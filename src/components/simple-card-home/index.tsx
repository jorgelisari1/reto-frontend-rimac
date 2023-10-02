import React from 'react';
import RoundButton from '../button-round';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    title: string,
    desc: string,
    icon: string,
    checked: boolean,
    setChecked(boolean): void,
    checkedOther: boolean,
    setCheckedOther(boolean): void 
    
}
const SimpleCardHome: React.FC<Props> = ({ title, desc, icon, checked, setChecked, checkedOther ,setCheckedOther}) => {

    return <div 
    className={classNames(styles.card, {
        [styles["--select"]]: checked,
      })}>
        <span className={styles.check}><RoundButton isChecked={checked} setIsChecked={setChecked}  isCheckedOther={checkedOther} setIsCheckedOther={setCheckedOther}/></span>
        <div className={styles.content}>
        <span><img src={icon} alt="icono de salud"/></span>
        <span className={styles.title}>{title}</span>
        </div>
       
        <span className={styles.desc}>{desc}</span>
    </div>

};

export default SimpleCardHome;
