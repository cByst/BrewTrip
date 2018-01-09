export default function reducer(state={
    directions: null,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DIRECTIONS": {
        return {...state, fetching: true, directions: null}
      }
      case "FETCH_DIRECTIONS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_DIRECTIONS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          directions: action.payload,
        }
      }
    }
    return state
}