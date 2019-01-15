import 'regenerator-runtime/runtime'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { applyDiscount, removeDiscount } from 'Store/actions'

const DiscountController = ({ discount: { value, valid }, applyDiscount, removeDiscount }) => {
  const [discountCode, setDiscount] = useState('')
  const allowSubmission = discountCode.length === 6
  const handleRemoveDiscount = () => {
    setDiscount('')
    removeDiscount()
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (allowSubmission) {
      applyDiscount(discountCode)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      disabled={!allowSubmission}
      type="submit">
        Apply Discount
      </button>

      {valid && <button
      onClick={() => handleRemoveDiscount()}>
        Remove Discount
      </button>}

      {valid && <span>{ value }% off</span>}
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  async applyDiscount (discountCode) {
    let res = await fetch(`http://localhost:3000/discounts/${discountCode}`)
    let json = await res.json()

    return dispatch(applyDiscount(json))

  },
  removeDiscount() {
    return dispatch(removeDiscount())
  }
})

const mapStateToProps = ({ meta: { discount } }) => ({
  discount
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscountController)
