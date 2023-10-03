import React, {FC} from 'react'
import LazyImage from '../lazy-img'
import LogoRimac from '../../assets/images/Logo.svg'


type Props = {
  className?: string
  widthImage?: number
  heightImage?: number
}

export const RimacLogo: FC<Props> = ({ widthImage,heightImage, className }) => (
  <LazyImage src={LogoRimac} alt="Logo Estar Bien" style={{ width: widthImage, height: heightImage }} className={className} />
)
