import React from 'react'
import { connect } from 'react-redux'
import { discountedTotalSelector } from '../store/selectors'

const Total = ({ total }) => (<React.Fragment>{total.toFixed(2)}</React.Fragment>)


const mapStatetoProps = state => ({
  total: discountedTotalSelector(state)
})

export default connect(mapStatetoProps)(Total)
