import React from 'react'
import { connect } from 'react-redux'
import { changeQuantity } from '../store/actions'

const QuantityController = ({ id, quantity, changeQuantity }) => (
  <div>
    <label className="accessible" htmlFor={id}>Quantity</label>
    <input id={id} className="quantity-ctrl" type="number" value={quantity} onChange={(e) => changeQuantity(id, e.target.value)} />
  </div>
)

const mapDispatchToProps = dispatch => ({
  changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
})

export default connect(null, mapDispatchToProps)(QuantityController)
