import React from 'react';
import styles from './styles.module.scss'

type Props = {
    text: string
}
const Link: React.FC<Props> = ({ text }) => {

    return <a className={styles.text}>{text}</a>

};

export default Link;