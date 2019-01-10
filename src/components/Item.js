import React from 'react'

import QuantityController from 'Components/QuantityController'
import ProductRemover from 'Components/ProductRemover'
const Item = ({ id, name, quantity, price }) => {
  return (
    <li className="basket__item flex--center flex--padd-x">
      <div className="basket__item__content">
        <span>{name}</span>
      </div>
      <div className="basket__item__content">
        <span className="basket__item__price">£{price.toFixed(2)}</span>
      </div>
      <div className="basket__item__content flex flex--row flex--center flex--end">
        <QuantityController id={id} quantity={quantity} name/>
        <ProductRemover id={id}/>
      </div>
    </li>
  )
}

export default Item
