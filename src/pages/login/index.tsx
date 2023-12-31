  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { fetchApiPerson } from '../../services/api';
  import useResponsive from '../../hooks/use-responsive'
  import styles from './styles.module.scss';
  const Button = React.lazy(() => import('../../components/button'));
  const CardLoginTag = React.lazy(() => import('../../components/card-login-tag/CardLoginTag'));
  const LoginTextField = React.lazy(() => import('../../components/text-field'));
  const Check = React.lazy(() => import('../../components/check'));
  const Link = React.lazy(() => import('../../components/link'));
  const LazyImage = React.lazy(() => import('../../components/lazy-img'));
  const Footer = React.lazy(() => import('../../components/footer'));
 
  import bigImageFamily from '../../assets/images/big-family-pic.png'
  import smallImageFamily from '../../assets/images/small-family-pic.png'

  const Login: React.FC = () => {
    const [doc, setDoc] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [errorDoc, setDocError] = useState(false);
    const [labelDoc, setLabelDoc] = useState('');
    const [labelPhone, setLabelPhone] = useState('');
    const [id, setId] = useState('DNI');
    const [checked, setChecked] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);

    const { isTablet } = useResponsive();
    const navigate = useNavigate()

    const onClickScheduleButton = async() => {
      
      const validate = doc !== '' && !errorDoc && phone !== '' && !error && checked && checkedTwo;  
        if(validate){
          try {
            const response = await fetchApiPerson();
            const dataToSend = {  doc,
              docType:id,
              phone,
              name: response.name,
              lastName: response.lastName,
              birthDay: response.birthDay
            };
    
            navigate('/home', { state: { data: dataToSend } });
          } catch (error) {
            console.error('Error al llamar a la API:', error);
          }

      }else{
        setError(!error);
        setLabelPhone('por favor ingresa todos los datos ')
      
      }
    
    };

    return (
      <article className={styles.all}>
        <section className={styles.container}>
          {!isTablet && <div className={styles.imgContainer}><LazyImage src={bigImageFamily} alt="famila feliz" className={styles.bigImage} /></div>}
          <section className={styles.content}>
            <div className={styles.conditionalImage}>
              <CardLoginTag />
              {isTablet && <img src={smallImageFamily} alt='una familia feliz' className={styles.smallImage} width={136} height={160} />}
            </div>

            <LoginTextField
              doc={doc}
              setDoc={setDoc}
              phone={phone}
              setPhone={setPhone}
              errorPhone={error}
              setErrorPhone={setError}
              errorDoc={errorDoc}
              setErrorDoc={setDocError}
              labelDoc={labelDoc}
              setLabelDoc={setLabelDoc}
              labelPhone={labelPhone}
              setLabelPhone={setLabelPhone}
              id={id}
              setId={setId}
            />

            <Check text={"Acepto lo Política de Privacidad"} state={checked} setState={setChecked} />
            <Check text={"Acepto la Política Comunicaciones Comerciales"} state={checkedTwo} setState={setCheckedTwo} />
            <Link text="Aplican Términos y Condiciones."/>
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
        <Footer />
      </article>

    );
  };

  export default Login