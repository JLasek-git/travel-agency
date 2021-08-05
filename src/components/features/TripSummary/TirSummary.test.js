import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct with passed props', () =>{
    const expectedLinkId = 'abc';
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const expectedCost = '123';
    const expectedDays = 3;
    const expectedTags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary
      id={expectedLinkId}
      image={expectedImage}
      name={expectedName}
      cost={expectedCost}
      days={expectedDays}
      tags={expectedTags}
    />);

    const renderedLinkId = component.find('.link').prop('to');
    const renderedCost = component.find('.details').childAt(1).getElement();
    const renderedDays = component.find('.details').childAt(0).getElement();
    const renderedTags = component.find('.tag');

    expect(renderedLinkId).toEqual(`/trip/${expectedLinkId}`);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
    expect(expectedCost).toEqual(renderedCost.props.children[1]);
    expect(expectedDays).toEqual(renderedDays.props.children[0]);
    for(let i = 0; i < expectedTags.length; i++){
      expect(renderedTags.at(i).text()).toEqual(expectedTags[i]);
    }
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('tags wrapper should not render without tags prop', () => {
    const component = shallow(<TripSummary
      id='abc'
      image='image.jpg'
      name='name'
      cost='123'
      days={3}
    />);

    expect(component.exists('.tags')).toBe(false);

  });

});