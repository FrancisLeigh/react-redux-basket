import React from 'react'
import { connect } from 'react-redux'

const Total = ({total}) => (<React.Fragment>{total.toFixed(2)}</React.Fragment>)

const getMultiple = (num, modifier) => +num * modifier
const getTotal = products => {
  return products.reduce((sum, {price, quantity}) => {
    return sum + getMultiple(price, quantity)
  }, 0)
}

const mapStatetoProps = state => ({
  total: getTotal(state)
})

export default connect(mapStatetoProps)(Total)
