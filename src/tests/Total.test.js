import React from 'react'
import { shallow } from 'enzyme'
import { Total } from '../components/Total'

const MockProps = { total: 100, discountedTotal: 50 }

describe('<Total />', () => {
  it('Should render total and discounted total', () => {
    const component = shallow(<Total  {...MockProps} />)

    expect(component).toMatchSnapshot()
  })
})
