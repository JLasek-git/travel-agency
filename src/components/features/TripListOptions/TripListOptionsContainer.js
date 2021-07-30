import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTripDuration, changeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeTripDuration: (type, duration) => dispatch(changeTripDuration(type, duration)),
  addTags: tags => dispatch(changeTags(tags)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
