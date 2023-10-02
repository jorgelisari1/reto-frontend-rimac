import React from 'react';
import {Checkbox } from '@mui/material';
import styles from './styles.module.scss'

type Props = {
    text: string,
    state: boolean,
    setState(boolean): void
}
const Check: React.FC<Props> = ({ text, state, setState }) => {

    return <div>
        <Checkbox
            defaultChecked
            value={state}
            onChange={()=>{setState(!state)}}
            size='small'
            sx={{
                color: '#000000',
                borderRadius: 3,
                '&.Mui-checked': {
                    color: '#000000',
                },
            }}
        />
        <span className={styles.text}>{text}</span>
    </div>

};

export default Check;
