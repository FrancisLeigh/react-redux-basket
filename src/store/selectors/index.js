import { createSelector } from 'reselect'

const getMultiple = (num, modifier) => +num * modifier

const getItemsCombinedPrice = ({ items }) => items.reduce((sum, { price, quantity }) => sum + getMultiple(price, quantity), 0)
const getDiscount = ({ meta }) => meta.discount.value

export const discountedTotalSelector = createSelector(
  getDiscount,
  getItemsCombinedPrice,
  (discount, total) => {
    if (!discount) return total

    const deduction = total * (discount/100)

    return total - deduction
  }
)

export const totalSelector = createSelector(
  getItemsCombinedPrice,
  total => total
)
