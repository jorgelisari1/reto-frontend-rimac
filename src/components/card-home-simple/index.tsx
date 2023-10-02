import React from 'react';
import RoundButton from '../button-round';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    title: string,
    desc: string,
    icon: string,
    checked: boolean,
    handleCheckedChange(boolean): void,
    checkedOther: boolean,
    handleCheckedOtherChange(boolean): void 
    
}
const SimpleCardHome: React.FC<Props> = ({
     title,
     desc,
     icon,
     checked,
     handleCheckedChange,
     checkedOther,
     handleCheckedOtherChange}) => {

    return <div 
    className={classNames(styles.card, {
        [styles["--select"]]: checked,
      })}>
        <span className={styles.check}>
            <RoundButton 
            isChecked={checked} 
            setIsChecked={handleCheckedChange}  
            isCheckedOther={checkedOther} 
            setIsCheckedOther={handleCheckedOtherChange}/>
        </span>
        <div className={styles.content}>
        <span><img src={icon} alt={`Icono de ${title}`} /></span>
        <span className={styles.title}>{title}</span>
        </div>
       
        <span className={styles.desc}>{desc}</span>
    </div>

};

export default SimpleCardHome;
