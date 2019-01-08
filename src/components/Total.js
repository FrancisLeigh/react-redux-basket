import React from 'react'
import { connect } from 'react-redux'
import { discountedTotalSelector, totalSelector } from '../store/selectors'

const Total = ({ total, discountedTotal }) => {
  const discounted = discountedTotal !== total
  return (
    <React.Fragment>
      <span>
        { discounted && discountedTotal.toFixed(2) }
      </span>
      <span
      style={{
        textDecoration: discounted && 'line-through',
        color: discounted && 'red'
      }}
      className={ discounted && 'flex flex--padd-y' }>
        { total.toFixed(2) }
      </span>
    </React.Fragment>)
}


const mapStatetoProps = state => ({
  discountedTotal: discountedTotalSelector(state),
  total: totalSelector(state)
})

export default connect(mapStatetoProps)(Total)
