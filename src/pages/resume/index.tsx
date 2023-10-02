import React, { useState } from 'react';
import Step from '../../components/step';
import ButtonBack from '../../components/buttonBack';
import useResponsive from '../../hooks/use-responsive';
import styles from './styles.module.scss';



const nameC = "Plan en Casa";
const price = 39;

const description = [
    "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
    "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
    "Indemnización de S/300 en caso de hospitalización por más de un día."
]

const Resume: React.FC = () => {
    const [check, setCheck] = useState(true);
    const { isTablet } = useResponsive();
    const name = 'Rocío'
    return <section className={styles.home} >
        <Step />
        {
            !isTablet && (<div className={styles.center}>
                <ButtonBack text={'Volver'} />
            </div>)
        }
        <div className={styles.contentTitle}>
            <h2 className={styles.title}>Resumen del seguro</h2>
           
        </div>

    </section>

};

export default Resume;