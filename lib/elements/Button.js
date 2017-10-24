import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from 'color';
import * as colors from '../styles/colors';

const Spinner = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    style={{ verticalAlign: 'middle' }}
  >
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

const StyledButton = styled.a`
  ${props => {
    if (props.outline) {
      return 'background: transparent';
    }
    if (props.disabled) {
      return `background: #f9fafc`;
    }
    if (props.bgColor) {
      if (props.bgColor.charAt(0) === '#') {
        return `background: ${props.bgColor};`;
      } else {
        return `background: ${colors[props.bgColor]}`;
      }
    } else {
      return 'background: white;';
    }
  }};
  font-family: sans-serif;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  ${props => {
    if (props.block) {
      return `display: block;`;
    } else {
      return `display: inline-block;`;
    }
  }} font-size: 15px;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  ${props => {
    if (props.disabled) {
      return `color: #8492a6`;
    }
    if (props.outline) {
      return 'color: #3c4858';
    }
    if (props.bgColor) {
      if (props.bgColor.charAt(0) === '#') {
        const luminosity = color(props.bgColor).luminosity();
        if (luminosity > 0.4) {
          return 'color: black!important';
        } else {
          return 'color: white!important';
        }
      } else {
        const luminosity = color(colors[props.bgColor]).luminosity();
        if (luminosity > 0.48) {
          return 'color: black!important';
        } else {
          return 'color: white!important';
        }
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
          font-size: 20px;
          line-height: 32px;
          `;
    }
    if (props.small) {
      return `
            font-size: 12px;
            padding: 6px 18px;
        `;
    }
  }};
  ${props => (props.disabled ? 'pointer-events: none' : '')};
  &:hover {
    text-decoration: none;
    ${props => {
      if (props.outline) {
        if (props.bgColor.charAt(0) === '#') {
          const luminosity = color(props.bgColor).luminosity();
          if (luminosity > 0.4) {
            return 'color: black!important';
          } else {
            return 'color: white!important';
          }
        } else {
          const luminosity = color(colors[props.bgColor]).luminosity();
          if (luminosity > 0.48) {
            return 'color: black!important';
          } else {
            return 'color: white!important';
          }
        }
      }
    }};
    ${props => {
      if (props.bgColor) {
        if (props.bgColor.charAt(0) === '#') {
          return `background: ${color(props.bgColor)
            .darken(0.1)
            .string()};`;
        } else {
          return `background: ${color(colors[props.bgColor])
            .darken(0.1)
            .string()};`;
        }
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
  if (props.loading) {
    return (
      <StyledButton {...props}>
        <Spinner /> ...Loading
      </StyledButton>
    );
  }
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  /** (optional) Background color HEX code eg. #9b59b6 or a named color from color scheme */
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

Button.defaultProps = {
  bgColor: 'white'
};

export default Button;
