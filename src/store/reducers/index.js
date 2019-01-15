import { combineReducers } from 'redux'

import actions from 'Constants/actions'
import ItemsReducer from 'Store/reducers/items'

export const DefaultMeta = { discount: {} }

const BasketMeta = (state = DefaultMeta, action) => {
  switch (action.type) {
    case actions.APPLY_DISCOUNT:
      return { ...state, discount: action.payload }
    case actions.REMOVE_DISCOUNT:
      return { ...state, discount: {} }
    default:
      return state
  }
}

export default combineReducers({ meta: BasketMeta, items: ItemsReducer })
