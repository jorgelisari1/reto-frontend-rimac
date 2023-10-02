import React from 'react';
import useResponsive from '../../hooks/use-responsive';
import Step from './stepDesktop';
import StepMobile from './stepMobile';
import styles from './styles.module.scss'

type Props = {
    textMobile? : string | undefined,
    step: number
}
const Steps: React.FC<Props> = ({ textMobile, step }) => {

    const { isTablet } = useResponsive();

    return <>
        {
            isTablet ? (textMobile && <StepMobile text={textMobile} />) : <Step step={step} />
        }
    </>

};

export default Steps;