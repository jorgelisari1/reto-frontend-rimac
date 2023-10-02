import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Step from '../../components/step';
import ButtonBack from '../../components/buttonBack';
import CardResume from '../../components/card-resume';
import useResponsive from '../../hooks/use-responsive';
import styles from './styles.module.scss';


const Resume: React.FC = () => {
    const { isTablet } = useResponsive();
    const location = useLocation();
    const receivedData = location.state?.resume || null;


    return <section className={styles.resume} >
        <Step  step={2}/>
        {
            !isTablet && (<div className={styles.center}>
                <ButtonBack text={'Volver'}  route='/home' data={receivedData.userData}/>
            </div>)
        }
        <div className={styles.contentTitle}>
            <h2 className={styles.title}>Resumen del seguro</h2>
        </div>
<div className={styles.content}>
<CardResume 
name={`${receivedData.userData.name} ${receivedData.userData.lastName}`} 
docType={receivedData.userData.docType}
doc={receivedData.userData.doc} 
phone={receivedData.userData.phone} 
plan={receivedData.title} 
price={receivedData.price} />
</div>
    

    </section>

};

export default Resume;