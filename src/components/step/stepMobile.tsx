import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './styles.module.scss'

type Props = {
    text?: string
}
const StepMobile: React.FC<Props> = ({ text }) => {

    return <div className={styles.stepMobile}>
      <span className={styles.numberLight}> <KeyboardArrowLeftIcon/> </span>
      <span className={styles.text}>{text}</span>
      <div className={styles.progress}>
        <div className={styles.lead}></div>
      </div>
    </div>

};

export default StepMobile;