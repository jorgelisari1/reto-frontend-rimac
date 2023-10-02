import React from 'react';
import GlFamily from '../../icons/gl-family';
import styles from './styles.module.scss';

type Props = {
    name: string,
    dni: string,
    phone: string,
    plan: string,
    price: number 
}
const CardResume: React.FC<Props> = ({ name, dni, phone, plan, price  }) => {

    return <div className={styles.card}>
        <span className={styles.first}>PRECIOS CALCULADOS PARA:</span>
        <div className={styles.contentName}>
            <GlFamily/>
            <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.contentData}>
            <span className={styles.title}>Responsable de pago</span>
            <span className={styles.subtitle}>DNI: {dni}</span>
            <span className={styles.subtitle}>Celular: {phone}</span>

        </div>
        <div className={styles.contentData}> 
        <span className={styles.title}>Plan elegido</span>
            <span className={styles.subtitle}>{plan}</span>
            <span className={styles.subtitle}>Costo del plan: ${price} al mes</span>
        </div>
        
    </div>

};

export default CardResume;
