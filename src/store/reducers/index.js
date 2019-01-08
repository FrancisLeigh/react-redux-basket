import { combineReducers } from 'redux'

import actions from '../../constants/actions'
import ItemsReducer from './items'

const defaultStore = {
  discount: null,
}

const BasketMeta = (state = defaultStore, action) => {
  switch (action.type) {
    case actions.APPLY_DISCOUNT:
      return { ...state, discount: action.payload }
    case actions.REMOVE_DISCOUNT:
      return { ...state, discount: null }
    default:
      return state
  }
}

export default combineReducers({ meta: BasketMeta, items: ItemsReducer })
