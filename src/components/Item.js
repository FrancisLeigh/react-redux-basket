import React from 'react'

import QuantityController from './QuantityController'
import ProductRemover from './ProductRemover'
const Item = ({ id, name, quantity, price }) => {
  return (
    <div className="basket__item flex--center">
      <div className="basket__item__content">
        <h1>{name}</h1>
      </div>
      <div className="basket__item__content">
        <QuantityController id={id} quantity={quantity} />
      </div>
      <div className="basket__item__content flex flex--row flex--center">
        <h2 className="basket__item__price">£{price.toFixed(2)}</h2>
        <ProductRemover id={id}/>
      </div>
    </div>
  )
}

export default Item
