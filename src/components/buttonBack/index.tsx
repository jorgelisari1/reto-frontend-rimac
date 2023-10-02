import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './styles.module.scss'

type Props = {
    text: string,
   route: string,
   data?: any,
}

const ButtonBack: React.FC<Props> = ({ text, route, data}) => {
    const navigate = useNavigate();

    const handleClickBack = ()=>{
        data?navigate(route, { state: { data: data } }):navigate(route);
    }

    return <div className={styles.btn} onClick={handleClickBack}>
        <span className={styles.light}> <KeyboardArrowLeftIcon/> </span>
        <span className={styles.text}>{text}</span>
    </div>

};

export default ButtonBack;
