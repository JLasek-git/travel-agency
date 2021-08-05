import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correctly without crashing', () =>{
    const expectedLinkId = 'abc';
    const component = shallow(<TripSummary id={expectedLinkId} tags={['tag1, tag2, tag3']} />);

    const renderedLinkId = component.find('.link').prop('to');
    expect(renderedLinkId).toEqual(`/trip/${expectedLinkId}`);
  });
});