export default function reducer(state={
    to: null,
    from: null,
    distance: 5,
    focus: null,
    autocomplete: null,
    fetchingAutoComplete: false,
    route: null,
  }, action) {

    switch (action.type) {
      case "SET_TO": {
        return {...state, to: action.payload}
      }
      case "SET_FROM": {
        return {...state, from: action.payload}
      }
      case "SET_DISTANCE": {
        return {...state, distance: action.payload}
      }
      case "SET_FOCUS": {
        return {...state, focus: action.payload}
      }
      case "FETCH_AUTOCOMPLETE": {
        return {...state, fetchingAutoComplete: true}
      }
      case "SET_ROUTE": {
        return {...state, route: action.payload}
      }
    }
    return state
}