import { useMediaQuery } from '@mui/material'

const useResponsive = () => {
  const isMobile = useMediaQuery(`(max-width: 599px)`)
  const isTablet = useMediaQuery(`(max-width: 1023px)`)
  const isDesktop = useMediaQuery(`(max-width: 1099px)`)
  const isDesktopMax = useMediaQuery(`(max-width: 1552px)`)

  return {
    isTablet,
    isMobile,
    isDesktop,
    isDesktopMax,
  }
}

export default useResponsive
