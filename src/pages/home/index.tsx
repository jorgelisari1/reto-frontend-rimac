import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Step from '../../components/step';
import ButtonBack from '../../components/buttonBack';
import SimpleCardHome from '../../components/simple-card-home';
import CardHome from '../../components/card-home';
import useResponsive from '../../hooks/use-responsive';
import IconForMe from '../../assets/images/IcProtectionLight.svg';
import IconForOther from '../../assets/images/IcAddUserLight.svg';
import styles from './styles.module.scss';



const nameC = "Plan en Casa";
const price = 39;

const description = [
    "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
    "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
    "Indemnización de S/300 en caso de hospitalización por más de un día."
]



const Home: React.FC = () => {
    const [check, setCheck] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const { isTablet } = useResponsive();
    const location = useLocation();
    const receivedData = location.state?.data || null;

    console.log('useLocation', receivedData)

    return <section className={styles.home} >
        <div className={styles.hola}>
        <Step />
        </div>
       
        {
            !isTablet && (<div className={styles.center}>
                <ButtonBack text={'Volver'} />
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
            (check || checkTwo)&&(<section>
            <CardHome
                title={nameC}
                price={price}
                description={description}
                icon={IconForMe}
            />
        </section>)

        }
       


    </section>

};

export default Home;