import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from 'color';

const StyledButton = styled.a`
  ${props => {
    if (props.bgColor) {
      return `background: ${props.bgColor};`;
    } else {
      return 'background: white;';
    }
  }};
  font-family: sans-serif;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  ${props => {
    if (props.block) {
      return `display: block;`;
    } else {
      return `display: inline-block;`;
    }
  }} font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  ${props => {
    if (props.bgColor) {
      const luminosity = color(props.bgColor).luminosity();
      if (luminosity > 0.45) {
        return 'color: black!important';
      } else {
        return 'color: white!important';
      }
    } else {
      return 'color: black!important';
    }
  }};
  border-radius: 4px;
  padding: 9px 24px;
  transition: 0.15s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  ${props => {
    if (props.large) {
      return `
          font-size: 24px;
          line-height: 24px;
          `;
    }
    if (props.small) {
      return `
            font-size: 12px;
            padding: 6px 18px;
        `;
    }
  }};
  &:hover {
    text-decoration: none;
    ${props => {
      if (props.bgColor) {
        return `background: ${color(props.bgColor)
          .darken(0.1)
          .string()};`;
      } else {
        return `background: ${color('white')
          .darken(0.1)
          .string()}`;
      }
    }};
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  /** (optional) Background color HEX code eg. #9b59b6 */
  bgColor: PropTypes.string,
  /** (optional) Large button variant */
  large: PropTypes.bool,
  /** (optional) Display block (full-width) button variant */
  block: PropTypes.bool,
  /** (optional) Small button variant */
  small: PropTypes.bool,
  /** (optional) Link for button */
  href: PropTypes.string,
  /** (optional) onClick function */
  onClick: PropTypes.func
};

export default Button;
