import { FC } from 'react'

import LazyImage from '../lazy-img'
import LogoRimac from '../../assets/images/Logo.svg'

type Props = {
  className?: string
  dimension?: number
}

export const RimacLogo: FC<Props> = ({ dimension, className }) => (
  <LazyImage src={LogoRimac} alt="Logo Estar Bien" style={{ width: dimension }} className={className} />
)
