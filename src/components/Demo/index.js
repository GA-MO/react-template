import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { breakpoint, fluidSizing } from '../../utils'

const Demo = ({ name }) => {
  return (
    <Style>
      <h1>I am {name}</h1>
      <div className='show-on-mobile'>Size is Mobile</div>
    </Style>
  )
}

Demo.propTypes = {
  name: PropTypes.string.isRequired
}

Demo.defaultProps = {
  name: 'React'
}

export default Demo

const Style = styled.div`
  label: Demo;

  text-align: center;

  h1 {
    ${fluidSizing('font-size', { SM: 20, M: 30, T: 65, D: 95 })}
  }

  .show-on-mobile {
    display: none;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
    color: orange;
  }

  ${breakpoint('M')} {
    .show-on-mobile {
      display: block;
    }
  }
`
