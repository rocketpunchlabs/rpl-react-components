import React from 'react';
import styled from 'styled-components';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { shallow, mount, render, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import { Button } from '../';

// setup file
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<Button>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should default to black text', () => {
    const tree = renderer.create(<Button>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'black!important');
  });

  it('should default to white background', () => {
    const tree = renderer.create(<Button>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background', 'white');
  });

  it('should render children', () => {
    const wrapper = mount(<Button>Hello World</Button>);
    expect(wrapper.find('a').text()).toBe('Hello World');
  });

  it('should render large button', () => {
    const tree = renderer.create(<Button large>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '24px');
  });

  it('should render small button', () => {
    const tree = renderer.create(<Button small>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '12px');
  });

  it('should render blue button', () => {
    const tree = renderer
      .create(<Button bgColor="#3498db">Hello</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background', '#3498db');
  });

  it('should render block button', () => {
    const tree = renderer.create(<Button block>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'block');
  });

  it('should render a link', () => {
    const tree = renderer
      .create(<Button href="https://www.google.com">Google</Button>)
      .toJSON();
    const wrapper = mount(
      <Button href="https://www.google.com">Google</Button>
    );
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('a').prop('href')).toBe('https://www.google.com');
  });

  it('should pass an onClick', () => {
    const tree = renderer
      .create(<Button onClick={() => alert('clicked')}>Hello</Button>)
      .toJSON();
    const wrapper = mount(
      <Button onClick={() => console.log('clicked')}>Hello</Button>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should perform the onClick', () => {
    const tree = renderer
      .create(<Button onClick={() => console.log('clicked')}>Hello</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();
    expect(tree).toMatchSnapshot();
  });
});
