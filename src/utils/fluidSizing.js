const breakpoints = {
  D: 1440,
  L: 1200,
  T: 990,
  M: 785,
  SM: 0
}

const linearInterpolation = (data) => {
  const keys = Object.keys(data)
  const m = (data[keys[1]] - data[keys[0]]) / (keys[1] - keys[0])
  let b = data[keys[0]] - m * keys[0]

  let sign = '+'

  if (b < 0) {
    sign = '-'
    b = Math.abs(b)
  }

  return `calc(${m * 100}vw ${sign} ${b}px)`
}

const getBreakpoint = (breakpoint) => {
  const isExistingBreakpoint = Object.keys(breakpoints).some((b) => b === breakpoint)
  if (isExistingBreakpoint) {
    return breakpoints[breakpoint]
  }

  return breakpoint
}

function fluidSizing(property, data) {
  const keys = Object.keys(data)

  let mediaQuery = ''

  for (let i = 0; i < keys.length - 1; i++) {
    const breakpoint = getBreakpoint(keys[i])
    const nextBreakpoint = getBreakpoint(keys[i + 1])
    const value = data[keys[i]]
    const nextValue = data[keys[i + 1]]

    const temp = {
      [breakpoint]: value,
      [nextBreakpoint]: nextValue
    }

    mediaQuery += `
      @media (min-width: ${breakpoint}px) {
        ${property}: ${linearInterpolation(temp)};
      }
    `
  }

  mediaQuery += `
    @media (min-width: ${getBreakpoint(keys[keys.length - 1])}px) {
      ${property}: ${data[keys[keys.length - 1]]}px;
    }
  `

  return mediaQuery
}

export default fluidSizing
