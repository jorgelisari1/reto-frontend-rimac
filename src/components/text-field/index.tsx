import React from 'react';
import { TextField, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useResponsive from '../../hooks/use-responsive';
import styles from './styles.module.scss';

const MOBILE_MIN_WIDTH = 100;
const DESKTOP_MIN_WIDTH = 140;

type Props = {
    doc: string;
    setDoc: React.Dispatch<React.SetStateAction<string>>;
    phone?: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    errorPhone: boolean;
    setErrorPhone: React.Dispatch<React.SetStateAction<boolean>>;
    errorDoc?: boolean;
    setErrorDoc: React.Dispatch<React.SetStateAction<boolean>>;
    labelDoc?: string;
    setLabelDoc: React.Dispatch<React.SetStateAction<string>>;
    labelPhone?: string;
    setLabelPhone: React.Dispatch<React.SetStateAction<string>>;
    id?: string;
    setId: React.Dispatch<React.SetStateAction<string>>;
};

const LoginTextField: React.FC<Props> = ({
    doc,
    setDoc,
    phone,
    setPhone,
    errorPhone,
    setErrorPhone,
    errorDoc,
    setErrorDoc,
    labelDoc,
    setLabelDoc,
    labelPhone,
    setLabelPhone,
    id,
    setId,
}) => {
    const { isMobile } = useResponsive();

    const handleChange = (event: SelectChangeEvent) => {
        setId(event.target.value as string);
    };

    const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/ /g, "");

        if (/^[0-9]{8,}$/.test(value)) {
            setErrorDoc(false);
            setLabelDoc('');
        } else {
            setErrorDoc(true);
            setLabelDoc('Ingresa un documento válido.');
        }

        setDoc(value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/ /g, "");

        if (/\d{9,}/.test(value)) {
            setErrorPhone(false);
            setLabelPhone('');
        } else {
            setErrorPhone(true);
            setLabelPhone('Por favor, ingresa un número de celular válido.');
        }

        setPhone(value);
    };

    return (
        <section className={styles.content}>
            <p className={styles.subTitle}>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>

            <div className={styles.form}>
                <FormControl
                    sx={{
                        paddingBottom: 2,
                        minWidth: isMobile ? MOBILE_MIN_WIDTH : DESKTOP_MIN_WIDTH,
                    }}
                >
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={id}
                        IconComponent={ExpandMoreIcon}
                        onChange={handleChange}
                        sx={{}}
                    >
                        <MenuItem value={'DNI'}>DNI</MenuItem>
                        <MenuItem value={'CE'}>CE</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    sx={{
                        minWidth: isMobile ? 220 : 210,
                    }}
                    id={doc}
                    type="text"
                    label="Nro. de documento"
                    variant="outlined"
                    helperText={labelDoc}
                    error={errorDoc}
                    onChange={handleDocChange}
                />
            </div>
            <div style={{ marginBottom: '2px' }}>
                <TextField
                    sx={{
                        paddingBottom: 2,
                        minWidth: isMobile ? 320 : 352,
                    }}
                    id={phone}
                    type="text"
                    variant="outlined"
                    label="Celular"
                    helperText={labelPhone}
                    error={errorPhone}
                    onChange={handlePhoneChange}
                />
            </div>
        </section>
    );
};

export default LoginTextField
