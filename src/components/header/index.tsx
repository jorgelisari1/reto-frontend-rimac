import { FC } from 'react'
import useResponsive from '../../hooks/use-responsive'
import { RimacLogo } from '../logo-rimac'
import { GlTelephoneSolid } from '../../icons/gl-telephone-solid'
import styles from './styles.module.scss'



const Header: FC = () => {
    const { isTablet } = useResponsive()
    return (
        <div id="header"
            className={styles.header}>
                <div>
                    <RimacLogo dimension={50} />
                </div>
                <div  className={styles.content}>
                    {
                        !isTablet&& <div  className={styles.text }>¡Compra por este medio! </div>
                    }
                    <div className={styles.phone}>
                    <GlTelephoneSolid/>
                    <div className={styles.number}>(01) 411 6001</div>
                    </div>
                    
                    
                </div>
           
        </div>
    )
}

export default Header
