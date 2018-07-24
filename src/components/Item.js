import React from 'react'

import QuantityController from './QuantityController'
import ProductRemover from './ProductRemover'
const Item = ({ id, name, quantity, price }) => {
  return (
    <li className="basket__item flex--center flex--padd-x">
      <div className="basket__item__content">
        <span>{name}</span>
      </div>
      <div className="basket__item__content">
        <QuantityController id={id} quantity={quantity} name/>
      </div>
      <div className="basket__item__content flex flex--row flex--center flex--end">
        <span className="basket__item__price">£{price.toFixed(2)}</span>
        <ProductRemover id={id}/>
      </div>
    </li>
  )
}

export default Item
