import React from 'react';
import styles from './styles.module.scss'

type Props = {
    text: string
}
const Link: React.FC<Props> = ({ text }) => {

    return <a className={styles.text} href='https://www.rimac.com.pe/uploads/Condicionado-General_FOLA.pdf'>{text}</a>

};

export default Link;