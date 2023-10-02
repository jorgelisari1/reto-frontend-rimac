import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchApiPlans } from '../../services/api';
import { ApiPlansResponse } from '../../typins/data';
import { minusFivePercent } from '../../utils/minus-five-percent';
import {calculateAgeFromString} from '../../utils/calculate-age'
import Step from '../../components/step';
import ButtonBack from '../../components/buttonBack';
import SimpleCardHome from '../../components/simple-card-home';
import CardHome from '../../components/card-home';
import useResponsive from '../../hooks/use-responsive';
import IconForMe from '../../assets/images/IcProtectionLight.svg';
import IconForOther from '../../assets/images/IcAddUserLight.svg';
import styles from './styles.module.scss';

const Home: React.FC = () => {
    const [check, setCheck] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [apiData, setApiData] = useState<ApiPlansResponse | null>(null);
    const { isTablet } = useResponsive();
    const location = useLocation();
    const receivedData = location.state?.data || null;
    const userAge = calculateAgeFromString(receivedData.birthDay);
    useEffect(() => {
        // Verifica si los datos del usuario están disponibles
        if (receivedData) {

            fetchApiPlans()
                .then(response => {
                    // Actualiza el estado con la respuesta de la API
                    setApiData(response);
                })
                .catch(error => {
                    console.error('Error al llamar a la API:', error);
                });
        }
    }, [receivedData]);

    return <section className={styles.home} >
        <Step textMobile='PASO 1 DE 2' step={1} />
        {
            !isTablet && (<div className={styles.center}>
                <ButtonBack text={'Volver'}  route='/'/>
            </div>)
        }
        <div className={styles.contentTitle}>
            <h2 className={styles.title}>{receivedData.name} ¿Para quién deseas cotizar?</h2>
            <span className={styles.subtitle}>Selecciona la opción que se ajuste más a tus necesidades.</span>
        </div>
        <section className={styles.section}>
            <SimpleCardHome
                title='Para mi'
                desc='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
                icon={IconForMe}
                checked={check}
                setChecked={setCheck}
                checkedOther={checkTwo}
                setCheckedOther={setCheckTwo}
            />
            <SimpleCardHome
                title='Para alguien más'
                desc='Realiza una cotización para uno de tus familiares o cualquier persona.'
                icon={IconForOther}
                checked={checkTwo}
                setChecked={setCheckTwo}
                checkedOther={check}
                setCheckedOther={setCheck}

            />
        </section>
        {
            (check || checkTwo) && (<section className={styles.contentCarHome}>{
                apiData!.list.map((item) => {
                    if(userAge >= item.age){
                        return (
                            <CardHome
                                key={item.name}
                                title={item.name}
                                price={check ? item.price : minusFivePercent(item.price)}
                                description={item.description}
                                icon={IconForMe}
                                userData={receivedData}
                                discount={checkTwo ? item.price: undefined}
                            />
                        )
                    }
                    
                })
            }
            </section>)
        }

    </section>

};

export default Home;