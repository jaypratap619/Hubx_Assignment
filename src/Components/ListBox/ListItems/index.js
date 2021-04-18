import React from 'react';
import { Wrapper } from './style';
import ListItem from './ListItem'
function Index(props) {
  return (
    <Wrapper>
      <ul>
        {props.items.map((el) =>{
          return <li><a href='/'><ListItem item = {el}/></a></li>
        })}
      </ul>
    </Wrapper>
  );
}

export default Index;
