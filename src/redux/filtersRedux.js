/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');

// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeTripDurationFrom = payload => ({payload, type: CHANGE_DURATION_FROM});
export const changeTripDurationTo = payload => ({payload, type: CHANGE_DURATION_TO});
export const changeTags = (payload) => ({payload, type: CHANGE_TAGS});
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION_FROM:
      return{
        ...statePart,
        duration: {
          ...statePart.duration,
          from: parseInt(action.payload),
        },
      };

    case CHANGE_DURATION_TO:
      return{
        ...statePart,
        duration: {
          ...statePart.duration,
          to: parseInt(action.payload),
        },
      };

    case CHANGE_TAGS:
      return{
        ...statePart,
        tags: action.payload,
      };
    default:
      return statePart;
  }
}
