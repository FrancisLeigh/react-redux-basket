import React from 'react'
import { connect } from 'react-redux'
import { clearQuantities } from '../store/actions'

import Item from './Item'
import BasketTotal from './Total'
const Basket = ({ products, clearQuantities }) => {
  return (
    <div className="basket">
      <div className="basket flex--wider basket flex--padd">
      <ul className="basket flex--wider basket flex--padd">
        {products.map((props) => (
            <Item key={`product-${props.id}`} {...props} />
          )
        )}
      </ul>
      <div className="basket__footer flex flex--row flex--center">
        <h1 className="flex flex--fit">
          £<BasketTotal />
        </h1>
        <div className="flex flex--fit flex--row">
          <button className="button" onClick={() => clearQuantities()}>Clear</button>
          <button className="button button--primary" disabled>Checkout ></button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state
})

const mapDispatchToProps = dispatch => ({
  clearQuantities: () => dispatch(clearQuantities())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)
