import React from 'react';
import { Wrapper } from './style';
function index(props) {
  return (
    <Wrapper>
      <h3>{props.title}</h3>
    </Wrapper>
  );
}

export default index;