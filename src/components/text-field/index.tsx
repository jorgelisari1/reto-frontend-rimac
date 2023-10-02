import React from 'react';
import { TextField, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useResponsive from '../../hooks/use-responsive';
import styles from './styles.module.scss';

type Props = {
    doc: string;
    setDoc(string): void;
    phone?:string;
    setPhone(STRING): void;
    error: boolean;
    setError(boolean): void;
    errorDoc?: boolean;
    setErrorDoc(boolean): void;
    errorCliente?: boolean;
    setErrorCliente(boolean): void;
    labelDoc?: string;
    setLabelDoc(string): void;
    labelPhone?: string;
    setLabelPhone(string): void;
    id?: string;
    setId(string): void


};

const LoginTextField: React.FC<Props> = ({
    doc,
    setDoc,
    phone,
    setPhone,
    error,
    setError,
    errorDoc,
    setErrorDoc,
    errorCliente,
    setErrorCliente,
    labelDoc,
    setLabelDoc,
    labelPhone,
    setLabelPhone,
    id,
    setId,
}) => {
 const {isMobile} = useResponsive()

    const onClickScheduleButton = () => {
        console.log('acaa')
    };

    const handleChange = (event: SelectChangeEvent) => {
        setId(event.target.value as string);
    };

    return (
        <section className={styles.content}>
            <p className={styles.subTitle}>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>

            <div className={styles.form} >
                <FormControl sx={{
                    paddingBottom: 2,
                    minWidth: isMobile?100:140,
                  
                }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={id}
                        IconComponent={ExpandMoreIcon}
                        onChange={handleChange}
                        sx={{
                        
                        }}
                        
                    >
                        <MenuItem value={'DNI'}>DNI</MenuItem>
                        <MenuItem value={'CE'}>CE</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    sx={{
                        minWidth: isMobile?220:210,
                    }}
                    id={doc}
                    type="text"
                    label="Nro. de doc"
                    variant="outlined"
                    helperText={labelDoc}
                    error={errorDoc}
                    onChange={(e) => setDoc((e.target.value).replace(/ /g, ""))}
                />
            </div>
            <div style={{ marginBottom: '2px' }}>
                <TextField
                    sx={{
                        paddingBottom: 2,
                        minWidth: isMobile?320:352,
                        
                    }}
                    id="celular"
                    type="text"
                    variant="outlined"
                    label="Celular"
                    helperText={labelPhone}
                    error={errorCliente}
                    onChange={(e) => setPhone((e.target.value).replace(/ /g, ""))}
                />
            </div>
        </section>
    );
};

export default LoginTextField
