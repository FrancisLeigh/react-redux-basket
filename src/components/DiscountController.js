import React, { useState } from 'react'
import { connect } from 'react-redux'
import { applyDiscount, removeDiscount } from '../store/actions'

const DiscountController = ({ discount, applyDiscount, removeDiscount }) => {
  const [discountCode, setDiscount] = useState('')
  const handleRemoveDiscount = () => {
    setDiscount('')
    removeDiscount()
  }
  return (
    <div>
      <label className="flex flex--end flex--padd-x">
        Discount Code
        <input
        placeholder="XXXXXX"
        minLength="6" maxLength="6"
        onChange={e => setDiscount(e.target.value)}
        value={discountCode}
        className="input input--half-width"/>
      </label>

      <button
      disabled={discountCode.length !== 6}
      onClick={() => applyDiscount(discountCode)}>
        Apply Discount
      </button>

      {discount && <button
      onClick={() => handleRemoveDiscount()}>
        Remove Discount
      </button>}

      {discount && <span>{discount}% off</span>}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  applyDiscount: discountCode => {
    return fetch(`http://localhost:3000/discounts/${discountCode}`)
    .then(res => {
      return dispatch(applyDiscount(Math.floor(Math.random() * 100) + 1))
    })
  },
  removeDiscount: () => dispatch(removeDiscount())
})

const mapStateToProps = ({ meta: { discount } }) => ({
  discount
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscountController)
