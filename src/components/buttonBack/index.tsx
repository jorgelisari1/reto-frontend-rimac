import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './styles.module.scss'

type Props = {
    text: string,
    state?: boolean,
    setState?(boolean): void
}
const ButtonBack: React.FC<Props> = ({ text, state, setState }) => {

    return <div className={styles.btn}>
        <span className={styles.light}> <KeyboardArrowLeftIcon/> </span>
        <span className={styles.text}>{text}</span>
    </div>

};

export default ButtonBack;
