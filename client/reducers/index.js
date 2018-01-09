import { combineReducers } from "redux";

import map from "./mapReducer";
import directions from "./directionsInputReducer";

export default combineReducers({
  map,
  directions,
})