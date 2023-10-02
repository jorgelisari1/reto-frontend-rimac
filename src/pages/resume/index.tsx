import React, { useState } from 'react';
import Step from '../../components/step';
import ButtonBack from '../../components/buttonBack';
import CardResume from '../../components/card-resume';
import useResponsive from '../../hooks/use-responsive';
import styles from './styles.module.scss';




   const name= 'jorgelis arianna pacheco rengifo'
   const dni= '003719316'
   const phone= '935121874'
   const plan= 'Plan en Casa y Clínica'
   const price= 99 


const Resume: React.FC = () => {
    const [check, setCheck] = useState(true);
    const { isTablet } = useResponsive();
    return <section className={styles.resume} >
        <Step />
        {
            !isTablet && (<div className={styles.center}>
                <ButtonBack text={'Volver'} />
            </div>)
        }
        <div className={styles.contentTitle}>
            <h2 className={styles.title}>Resumen del seguro</h2>
        </div>
<div className={styles.content}>
<CardResume name={name} dni={dni} phone={phone} plan={plan} price={price} />
</div>
    

    </section>

};

export default Resume;