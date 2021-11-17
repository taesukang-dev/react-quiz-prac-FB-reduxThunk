// Actions
const CREATE = 'user/CREATE'

// initial
const initialState = ''

// Action Creators
export function createUser(user) {
  return { type: CREATE, user }
}

// reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const newState = action.user
      return newState
    default:
      return state
  }
}
