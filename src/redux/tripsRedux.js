/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
    // output = output.filter(trip => trip.days >= 13);
  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  // TODO - filter trips by tripId

  // console.log('filtering trips by tripId:', tripId, filtered);
  for(const trip of trips) {
    if(trip.id === tripId) {
      return trip;
    }
  }

};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filteredTrips = [];
  // TODO - filter trips by countryCode

  for(let trip of trips) {
    if(trip.country.code === countryCode) {
      filteredTrips.push(trip);
    }
  }
  return filteredTrips;
};


/* ACTIONS */
/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
*/
