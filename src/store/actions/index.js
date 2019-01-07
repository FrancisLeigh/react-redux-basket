import actions from '../../constants/actions'

export const addProduct = payload => ({
  type: actions.ADD_PRODUCT,
  payload
})

export const applyDiscount = payload => ({
  type: actions.APPLY_DISCOUNT,
  payload
})

export const removeDiscount = () => ({ type: actions.REMOVE_DISCOUNT })

export const clearQuantities = () => ({ type: actions.CLEAR_QUANTITIES })

export const changeQuantity = (id, quantity) => ({ type: actions.CHANGE_QUANTITY, id, quantity })

export const removeProduct = id => ({ type: actions.REMOVE_PRODUCT, id})
