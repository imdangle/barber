import { useMediaQuery, useTheme, type Breakpoint } from '@mui/material'

export const useBreakpoint = (): Breakpoint[] => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints.keys
  const matchingBreakpoint = breakpoints.filter((key) => useMediaQuery(theme.breakpoints.only(key)))

  return matchingBreakpoint
}
export default useBreakpoint
