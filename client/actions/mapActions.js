export function fetchDirections(orig, dest) {
  return function(dispatch) {
    dispatch({type: "FETCH_DIRECTIONS"}); 
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
        origin: orig,
        destination: dest,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
    }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            dispatch({type: "FETCH_DIRECTIONS_FULFILLED", payload: result});
        } else {
            dispatch({type: "FETCH_DIRECTIONS_REJECTED", payload: result});
        }
    });
  }
}
