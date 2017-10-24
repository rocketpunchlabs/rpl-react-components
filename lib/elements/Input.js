import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from 'color';
import * as colors from '../styles/colors';

const Container = styled.div`
  border-width: 1px !important;
  border-style: solid !important;
  border-radius: 4px !important;
  background-color: #ffffff !important;
  border: 1px solid #dbdbdb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 19px;
  line-height: 24px;
  color: #484848 !important;
  padding: 11px;
  border: 0px;
  background-color: transparent;
`;

const Input = props => {
  return (
    <Container>
      <StyledInput {...props} />
    </Container>
  );
};

export default Input;
