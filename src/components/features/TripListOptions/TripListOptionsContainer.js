import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTripDurationFrom, changeTripDurationTo, changeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeTripDurationFrom: duration => dispatch(changeTripDurationFrom(duration)),
  changeTripDurationTo: duration => dispatch(changeTripDurationTo(duration)),
  addTags: tags => dispatch(changeTags(tags)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
