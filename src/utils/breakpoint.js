function breakpoint(bp) {
  const breakpoints = {
    D: '1440px',
    L: '1200px',
    T: '990px',
    M: '768px',
    SM: '420px'
  }

  const isExistingBreakpoint = Object.keys(breakpoints).some((b) => b === bp)

  if (isExistingBreakpoint) {
    return `@media screen and (max-width: ${breakpoints[bp]})`
  }

  return `@media screen and (max-width: ${bp})`
}

export default breakpoint
