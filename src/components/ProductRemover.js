import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../store/actions'

const ProductRemove = ({id, removeProduct}) => (
  <button className="button button--clear" onClick={() => removeProduct(id)}>X</button>
)

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(removeProduct(id))
})

export default connect(null, mapDispatchToProps)(ProductRemove)
