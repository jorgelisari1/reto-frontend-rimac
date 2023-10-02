import React from 'react';
import styles from './styles.module.scss'

type Props = {
    text?: string
}
const Step: React.FC<Props> = ({ text }) => {

    return <div className={styles.step}>
        <span className={styles.numberDark}>1</span>
        <span className={styles.selected}>Planes y coberturas</span>
        <div className={styles.dashed}>----</div>
        <span className={styles.numberLight}>2</span>
        <span className={styles.unselected}>Resumen</span>
    </div>

};

export default Step;