import React from 'react';
import { Wrapper } from './style';
function Index(props) {
  return (
    <Wrapper>
      <p>{props.item}</p>
      <p>{props.hist}</p>
    </Wrapper>
  );
}

export default Index;