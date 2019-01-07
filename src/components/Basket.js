import React from 'react'
import { connect } from 'react-redux'
import { clearQuantities } from '../store/actions'

import Item from './Item'
import BasketTotal from './Total'
import DiscountController from './DiscountController'
const Basket = ({ products, clearQuantities }) => {
  return (
    <div className="basket">
      <ul className="basket flex--wider basket flex--padd">
        {products.map((props) => (
            <Item key={`product-${props.id}`} {...props} />
          )
        )}
      </ul>
      <div className="basket__footer flex flex--row flex--center">
        <span className="text--large flex flex--fit">
          £<BasketTotal />
        </span>
        <div className="flex flex--fit flex--row">
          <button className="button" onClick={() => clearQuantities()}>Clear</button>
          <a href="/to-comparison-page"className="button button--primary">Checkout ></a>
        </div>
        <div className="flex flex-fit flex--row">
          <DiscountController />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ items }) => {
  return {
    products: items
  }
}

const mapDispatchToProps = dispatch => ({
  clearQuantities: () => dispatch(clearQuantities())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)
