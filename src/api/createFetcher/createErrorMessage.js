const getMessage = (res, options) => {
  if (res.message) return res.message
  return `Service error | ${options.url}`
}

export default function createErrorMessage(res, options) {
  throw Object({
    type: 'ERROR',
    message: getMessage(res, options)
  })
}
