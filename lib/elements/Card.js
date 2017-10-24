import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from 'color';
import * as colors from '../styles/colors';

const Container = styled.div`
  width: ${props => props.width};
  text-align: ${props => {
    if (props.right) {
      return 'right';
    } else if (props.center) {
      return 'center';
    } else {
      return 'left';
    }
  }};
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #484848 !important;
`;

const CardImg = styled.img`
  height: auto;
  max-width: 100%;
`;

const CardTag = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: sans-serif;
`;

const CardTitle = styled.h3`
  font-size: 19px;
  line-height: 22px;
  font-family: sans-serif;
  font-weight: 400;
  margin: 3px 0;
`;

const Card = props => {
  return (
    <Container width={props.width} {...props}>
      <CardLink href={props.href}>
        <CardImg src={props.src} />
        <CardTag>{props.tag}</CardTag>
        <CardTitle>{props.title}</CardTitle>
      </CardLink>
    </Container>
  );
};

Card.propTypes = {
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

Card.defaultProps = {};

export default Card;
