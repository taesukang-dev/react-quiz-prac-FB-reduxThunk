import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from '@firebase/firestore'
import { db } from '../../firebase'

// Actions
const CREATE = 'user/CREATE'
const POINT_AND_COMMENT = 'user/POINT_AND_COMMENT'
const ALL_USER = 'user/ALL_USER'

// initial
const initialState = []

// middlewares
export const adduserFB = (user) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'user'), {
      name: user,
      comment: '',
      point: '',
    })
    const user_data = { id: docRef.id, name: user, comment: '', point: '' }
    dispatch(createUser(user_data))
  }
}

export const insertPointAndCommentFB = (user) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, 'user', user.id)
    await updateDoc(docRef, {
      comment: user.comment,
      point: '' + user.sum,
    })
  }
}

export const allUserFB = () => {
  return async function (dispatch) {
    const user_data = await getDocs(collection(db, 'user'))
    let user_list = []
    user_data.forEach((el) => {
      user_list.push(el.data())
    })
    user_list.sort((a, b) => {
      if (Number(a['point']) > Number(b['point'])) return -1
      if (Number(a['point']) === Number(b['point'])) return 0
      if (Number(a['point']) < Number(b['point'])) return 1
    })
    dispatch(allUser(user_list))
  }
}

// Action Creators
export function createUser(user) {
  return { type: CREATE, user }
}

export function insertPointAndComment(payload) {
  return { type: POINT_AND_COMMENT, payload }
}

export function allUser(user_list) {
  return { type: ALL_USER, user_list }
}

// reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const newState = [
        ...state,
        { id: action.user.id, name: action.user.name, comment: '', point: '' },
      ]
      return newState
    case ALL_USER:
      return action.user_list
    default:
      return state
  }
}
