import React from 'react'
import { connect } from 'react-redux'
import { clearQuantities } from 'Store/actions'

import Item from 'Components/Item'
import BasketTotal from 'Components/Total'
import DiscountController from 'Components/DiscountController'
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
        <span className="text--large flex flex--fit flex--row">
          £<BasketTotal />
        </span>
        <div className="flex flex--row">
          <button className="button" onClick={() => clearQuantities()}>Clear</button>
          <a href="/to-comparison-page"className="button button--primary">Checkout ></a>
        </div>
      </div>
      <div className="basket__footer">
        <div className="flex flex-fit">
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
