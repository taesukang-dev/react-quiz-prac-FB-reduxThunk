// Actions
const CREATE = 'user/CREATE'
const SET_USER = 'user/SET_USER'
const POINT_AND_COMMENT = 'user/POINT_AND_COMMENT'

// initial
const initialState = []

// Action Creators
export function createUser(user) {
  return { type: CREATE, user }
}

export function setUser(user) {
  return { type: SET_USER, user }
}

export function insertPointAndComment(payload) {
  return { type: POINT_AND_COMMENT, payload }
}

// reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const newState = [...state, { id: action.user, comment: '', point: '' }]
      return newState
    case POINT_AND_COMMENT:
      const pointComment = state.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              comment: action.payload.comment,
              point: action.payload.sum,
            }
          : el
      )
      return pointComment
    default:
      return state
  }
}
