import React from 'react';
import classNames from 'classnames'; 
import styles from './styles.module.scss'

type Props = {
    step: number,

}
const Step: React.FC<Props> = ({ step}) => {

    const getNumberClasses = (number: number) => ({
        [styles.numberDark]: step === number,
        [styles.numberLight]: step !== number,
      });
      
      const getSelectedClasses = (number: number) => ({
        [styles.selected]: step === number,
        [styles.unselected]: step !== number,
      });

    return <div className={styles.step}>
       <span className={classNames(getNumberClasses(1))}>1</span>
    <span className={classNames(getSelectedClasses(1))}>Planes y coberturas</span>
    <div className={styles.dashed}>----</div>
    <span className={classNames( getNumberClasses(2))}>2</span>
    <span className={classNames(getSelectedClasses(2))}>Resumen</span>
    </div>

};

export default Step;