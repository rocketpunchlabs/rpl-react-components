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

// test('it works', () => {
//   const tree = renderer.create(<Button>Hello</Button>).toJSON();
//   expect(tree).toMatchSnapshot();
//   console.log(tree);
//   expect(tree).toHaveStyleRule('color', 'black!important');
// });

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
    // const wrapper = mount(
    //   <Button onClick={() => console.log('clicked')}>Hello</Button>
    // );
    expect(tree).toMatchSnapshot();

    tree.props.onClick();
    expect(tree).toMatchSnapshot();
  });

  //   it('should have "large" prop', () => {
  //     const wrapper = shallow(<Button large>Large</Button>);
  //     expect(wrapper.prop('large')).toBe(true);
  //   });

  //   it('should have "small" prop', () => {
  //     const wrapper = shallow(<Button small>Small</Button>);
  //     expect(wrapper.prop('small')).toBe(true);
  //   });

  //   it('should have "bgColor" prop', () => {
  //     const wrapper = shallow(<Button bgColor="#ec12ca">Small</Button>);
  //     expect(wrapper.prop('bgColor')).toEqual('#ec12ca');
  //   });

  //   it('should have style', () => {
  //     const wrapper = shallow(<Button bgColor="#ec12ca">Small</Button>);
  //     console.log(wrapper);
  //     expect(wrapper).to.have.style('border');
  //     // expect(wrapper.prop('bgColor')).toEqual('#ec12ca');
  //   });

  //   it('should render an anchor element if href exists', () => {
  //     const wrapper = mount(<Button href="/home">Home</Button>);

  //     expect(wrapper.find('a').length).toBe(1);
  //     expect(wrapper.text()).toBe('Home');
  //   });

  //   it('should render type as undefined by default when tag is "button"', () => {
  //     const wrapper = mount(<Button>Home</Button>);

  //     expect(wrapper.find('button').prop('type')).toBe(undefined);
  //     expect(wrapper.text()).toBe('Home');
  //   });

  //   it('should render type as "button" by default when tag is "button" and onClick is provided', () => {
  //     const wrapper = mount(<Button onClick={() => {}}>Home</Button>);

  //     expect(wrapper.find('button').prop('type')).toBe('button');
  //     expect(wrapper.text()).toBe('Home');
  //   });

  //   it('should render type as user defined when defined by the user', () => {
  //     const wrapper = mount(<Button type="submit">Home</Button>);

  //     expect(wrapper.find('button').prop('type')).toBe('submit');
  //     expect(wrapper.text()).toBe('Home');
  //   });

  //   it('should not render type by default when the type is not defined and the tag is not "button"', () => {
  //     const wrapper = mount(<Button tag="a">Home</Button>);

  //     expect(wrapper.find('a').prop('type')).toBe(undefined);
  //     expect(wrapper.text()).toBe('Home');
  //   });

  //   it('should not render type by default when the type is not defined and the href is defined', () => {
  //     const wrapper = mount(<Button href="#">Home</Button>);

  //     expect(wrapper.find('a').prop('type')).toBe(undefined);
  //     expect(wrapper.text()).toBe('Home');
  //   });

  //   it('should render buttons with default color', () => {
  //     const wrapper = shallow(<Button>Default Button</Button>);

  //     expect(wrapper.hasClass('btn-secondary')).toBe(true);
  //   });

  //   it('should render buttons with other colors', () => {
  //     const wrapper = shallow(<Button color="danger">Default Button</Button>);

  //     expect(wrapper.hasClass('btn-danger')).toBe(true);
  //   });

  //   it('should render buttons with outline variant', () => {
  //     const wrapper = shallow(<Button outline>Default Button</Button>);

  //     expect(wrapper.hasClass('btn-outline-secondary')).toBe(true);
  //   });

  //   it('should render buttons with outline variant with different colors', () => {
  //     const wrapper = shallow(<Button outline color="info">Default Button</Button>);

  //     expect(wrapper.hasClass('btn-outline-info')).toBe(true);
  //   });

  //   it('should render buttons at different sizes', () => {
  //     const small = shallow(<Button size="sm">Small Button</Button>);
  //     const large = shallow(<Button size="lg">Large Button</Button>);

  //     expect(small.hasClass('btn-sm')).toBe(true);
  //     expect(large.hasClass('btn-lg')).toBe(true);
  //   });

  //   it('should render block level buttons', () => {
  //     const block = shallow(<Button block>Block Level Button</Button>);

  //     expect(block.hasClass('btn-block')).toBe(true);
  //   });

  //   describe('onClick', () => {
  //     it('calls props.onClick if it exists', () => {
  //       const onClick = jest.fn();
  //       const wrapper = mount(<Button onClick={onClick}>Testing Click</Button>);

  //       wrapper.find('button').simulate('click');
  //       expect(onClick).toHaveBeenCalled();
  //     });

  //     it('is not called when disabled', () => {
  //       const e = createSpyObj('e', ['preventDefault']);
  //       const wrapper = mount(<Button>Testing Click</Button>);

  //       wrapper.instance().onClick(e);
  //       expect(e.preventDefault).not.toHaveBeenCalled();

  //       wrapper.setProps({ disabled: true });
  //       wrapper.instance().onClick(e);
  //       expect(e.preventDefault).toHaveBeenCalled();
  //     });
  //   });
});
