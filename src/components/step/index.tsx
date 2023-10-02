import React from 'react';
import useResponsive from '../../hooks/use-responsive';
import Step from './stepDesktop';
import StepMobile from './stepMobile';
import styles from './styles.module.scss'

type Props = {
    text?: string
}
const Steps: React.FC<Props> = ({ text }) => {

    const { isTablet } = useResponsive();

    return <div>
        {
            isTablet ? <StepMobile  text={'PASO 1 DE 2'}/> : <Step />
        }
    </div>

};

export default Steps;