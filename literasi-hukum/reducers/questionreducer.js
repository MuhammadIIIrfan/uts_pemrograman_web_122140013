export const initialState = {
    question: '',
    submitted: false
  }
  
  export function questionReducer(state, action) {
    switch (action.type) {
      case 'SET_QUESTION':
        return { ...state, question: action.payload }
      case 'SUBMIT':
        return { ...state, submitted: true }
      case 'RESET':
        return { ...initialState }
      default:
        return state
    }
  }
  