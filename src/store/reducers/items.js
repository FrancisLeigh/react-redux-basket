import actions from '../../constants/actions'
const ID = () => Math.random().toFixed(6)
const defaultStore = [
  {
    id: ID(),
    name: 'Mountain Dew',
    quantity: 0,
    price: 1.30
  },
  {
    id: ID(),
    name: 'Desperados',
    quantity: 2,
    price: 2.58
  },
  {
    id: ID(),
    name: 'Jack Daniels',
    quantity: 0,
    price: 3.35
  }
]

const ItemsReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actions.REMOVE_PRODUCT:
      return state.filter(({ id }) => id !== action.id)

    case actions.ADD_PRODUCT:
      return [
        ...state,
        {
          id: ID(),
          name: action.text,
          quantity: 1,
          price: action.price
        }
      ]

    case actions.CHANGE_QUANTITY:
      let { id, quantity } = action
      return state.map(product => {
        if (product.id === id) {
          product.quantity = quantity
        }
        return product
      })

    case actions.CLEAR_QUANTITIES:
      return state.map((product => {
        product.quantity = 0
        return product
      }))
    default:
      return state
  }
}

export default ItemsReducer
