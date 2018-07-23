import React from 'react'
import { connect } from 'react-redux'
import { changeQuantity } from '../store/actions'

const QuantityController = ({ id, quantity, changeQuantity }) => (
  <input className="quantity-ctrl" type="number" value={quantity} onChange={(e) => changeQuantity(id, e.target.value)} />
)

const mapDispatchToProps = dispatch => ({
  changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
})

export default connect(null, mapDispatchToProps)(QuantityController)
