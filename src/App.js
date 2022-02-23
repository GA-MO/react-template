import { Global, css } from '@emotion/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { Suspense } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'glud-component/build/style.css'
import 'normalize.css'

import { history } from './utils'
import configureStore from './store/configureStore'
import route from './routes'

const store = configureStore()

const globalStyles = css`
  html,
  body {
    background: #fcfcfc;
  }
`

function Root() {
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <Global styles={globalStyles} />
        <Router history={history}>{route}</Router>
      </Suspense>
    </Provider>
  )
}

export default Root
