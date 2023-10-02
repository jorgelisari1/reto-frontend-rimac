import React from 'react';
import styles from './styles.module.scss'
import Tag  from '../tag'
const CardLoginTag: React.FC = () => {

    return <div className={styles.container}> 
            <Tag/>
             <h3 className={styles.text}>Creado para ti y tu familia</h3>
           </div>;
};

export default CardLoginTag;
