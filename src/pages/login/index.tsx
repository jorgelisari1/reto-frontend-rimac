// src/components/Home.tsx
import React, { useState } from 'react';
import Button from '../../components/button';
import CardLoginTag from '../../components/card-login-tag/CardLoginTag';
import LoginTextField from '../../components/text-field';
import Check from '../../components/check';
import Link from '../../components/link';
import LazyImage from '../../components/lazy-img';
import Footer from '../../components/footer';
import useResponsive from '../../hooks/use-responsive'
import styles from './styles.module.scss';

import bigImageFamily from '../../assets/images/big-family-pic.png'
import smallImageFamily from '../../assets/images/small-family-pic.png'

const Login: React.FC = () => {
  const [doc, setDoc] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [errorDoc, setDocError] = useState(false);
  const [errorCliente, setErrorCliente] = useState(false);
  const [labelDoc, setLabelDoc] = useState('');
  const [labelPhone, setLabelPhone] = useState('');
  const [id, setId] = useState('DNI');
  const [checked, setChecked] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);

  const { isTablet } = useResponsive();
  const onClickScheduleButton = () => {
    console.log('acaa')
  };

  return (<article className={styles.all}>
    <section className={styles.container}>
    {!isTablet &&<LazyImage src={bigImageFamily} alt="famila feliz" className={styles.bigImage} />}
    <section className={styles.content}>
      <div className={styles.conditionalImage}>
        <CardLoginTag />
        {isTablet && <img src={smallImageFamily} alt='una familia feliz' className={styles.smallImage} />}
      </div>

      <LoginTextField
        doc={doc}
        setDoc={setDoc}
        phone={phone}
        setPhone={setPhone}
        error={error}
        setError={setError}
        errorDoc={errorDoc}
        setErrorDoc={setDocError}
        errorCliente={errorCliente}
        setErrorCliente={setErrorCliente}
        labelDoc={labelDoc}
        setLabelDoc={setLabelDoc}
        labelPhone={labelPhone}
        setLabelPhone={setLabelPhone}
        id={id}
        setId={setId}
      />

      <Check text={"Acepto lo Política de Privacidad"} state={checked} setState={setChecked} />
      <Check text={"Acepto la Política Comunicaciones Comerciales"} state={checkedTwo} setState={setCheckedTwo} />
      <Link text="Aplican Términos y Condiciones." />
      <div className={styles.btn}>
        <Button
          outline
          expand
          text="Cotíza aquí"
          onClick={onClickScheduleButton}
        />
      </div>
    </section>

  </section>
  <Footer/>
  </article>
  
  );
};

export default Login