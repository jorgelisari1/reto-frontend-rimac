import React, { FC, CSSProperties } from 'react'
import { LazyLoadImage} from 'react-lazy-load-image-component'

type Props = {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  afterLoad?(): void
}

const LazyImage: FC<Props> = ({ alt, src, style, className, afterLoad }) => (
  <LazyLoadImage src={src} style={style} className={className} alt={alt} loading="lazy" afterLoad={afterLoad} />
)

export default LazyImage
