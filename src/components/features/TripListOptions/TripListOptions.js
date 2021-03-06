import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripListOptions.module.scss';

import {Row, Col} from 'react-flexbox-grid';

class TripListOptions extends React.Component {
  handleTags(tag){
    const tagsList = this.props.filters.tags;

    if(!tagsList.includes(tag)) {
      // console.log('Adding tag', tag);
      tagsList.push(tag);
      // TODO - use action dispatcher from props
      this.props.addTags(tagsList);
    } else {
      // console.log('Removing tag', tag);
      const tagIndex = tagsList.indexOf(tag);
      tagsList.splice(tagIndex, 1);

      // TODO - use action dispatcher from props
      this.props.addTags(tagsList);
    }
  }

  handleDuration(type, value){

    console.log('Duration changed ', type, value);
    // TODO - use action dispatcher from props
    if(type === 'from'){
      this.props.changeTripDurationFrom(value);
    } else {
      this.props.changeTripDurationTo(value);
    }
  }

  handleSearch(phrase){
    this.props.changeSearchPhrase(phrase);
  }

  render(){
    const {tags, filters} = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                Duration from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.from} min='1' max='14' onChange={event => this.handleDuration('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.to} min='1' max='14' onChange={event => this.handleDuration('to', event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by tags</summary>
                <div className={styles.dropdown}>
                  {Object.keys(tags).map(tag => (
                    <label key={tag} className={styles.option}>
                      <input type='checkbox' checked={filters.tags.indexOf(tag) > -1} onChange={event => this.handleTags(tag, event.currentTarget.checked)} />
                      {tag}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TripListOptions.propTypes = {
  tags: PropTypes.object,
  filters: PropTypes.object,
  changeSearchPhrase: PropTypes.func,
  addTags: PropTypes.func,
  changeTripDurationFrom: PropTypes.func,
  changeTripDurationTo: PropTypes.func,
};

export default TripListOptions;
