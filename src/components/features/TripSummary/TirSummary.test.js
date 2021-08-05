import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link, depending on prop id', () =>{
    const expectedLinkId = 'abc';
    const component = shallow(<TripSummary id={expectedLinkId} tags={['tag1, tag2, tag3']} />);

    const renderedLinkId = component.find('.link').prop('to');
    expect(renderedLinkId).toEqual(`/trip/${expectedLinkId}`);
  });

  it('should render correct image and image alt', () => {
    const expectedImage = 'image.jpg';
    const expectedImageAlt = 'name';

    const component = shallow(<TripSummary image={expectedImage} name={expectedImageAlt} tags={['tag1, tag2, tag3']}/>);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);

    console.log(component.debug());
  });
});