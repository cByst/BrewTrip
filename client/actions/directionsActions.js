export function setTo(to) {
    return {
        type: 'SET_TO',
        payload: to,
    }
}

export function setFrom(from) {
    return {
        type: 'SET_FROM',
        payload: from,
    }
}

export function setDistance(distance) {
    return {
        type: 'SET_DISTANCE',
        payload: distance,
    }
}

export function setFocus(focus) {
    return {
        type: 'SET_FOCUS',
        payload: focus,
    }
}

export function setRoute(routeId) {
    return {
        type: 'SET_ROUTE',
        payload: routeId,
    }
}

// export function autoComplete(text) {
//     return function(dispatch) {
//       dispatch({type: "FETCH_DIRECTIONS"}); 
//       const DirectionsService = new google.maps.DirectionsService();
//       DirectionsService.route({
//           origin: orig,
//           destination: dest,
//           travelMode: google.maps.TravelMode.DRIVING,
//           provideRouteAlternatives: true,
//       }, (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//               dispatch({type: "FETCH_DIRECTIONS_FULFILLED", payload: result});
//           } else {
//               dispatch({type: "FETCH_DIRECTIONS_REJECTED", payload: result});
//           }
//       });
//     }
//   }
  
