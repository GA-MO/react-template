import axios from 'axios'
import get from 'lodash/get'

import createErrorMessage from './createErrorMessage'
import isServiceError from './isServiceError'

const defaultOptions = {
  useMock: false,
  delay: 0,
  jsonMock: '',
  method: 'get',
  url: '',
  params: {},
  data: {},
  timeout: 10000,
  headers: {}
}

export default function createFetcher(userOptions) {
  const options = { ...defaultOptions, ...userOptions }
  const { useMock, jsonMock, url, delay } = options
  const serviceURL = useMock ? `/JSONMockup/${jsonMock}` : url

  return new Promise((resolve) => {
    setTimeout(async () => {
      if (useMock) {
        options.method = 'get'
        options.url = serviceURL
      }
      resolve(fetch(options))
    }, delay * 1000)
  })
}

const fetch = async (options) => {
  try {
    const res = await axios(options)

    if (isServiceError(res, options)) {
      createErrorMessage(res, options)
    }

    return res
  } catch (err) {
    if (err.type) throw err

    const errorData = get(err, 'response', err)
    createErrorMessage(errorData, options)
  }
}
