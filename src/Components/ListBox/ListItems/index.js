import React from 'react';
import { Wrapper } from './style';
import ListItem from './ListItem'
function Index(props) {
  return (
    <Wrapper>
      <ul>
        {props.items.map((el,index) =>{
          return <li><a href='/'><ListItem item = {el} hist = {props.history[index]}/></a></li>
        })}
      </ul>
    </Wrapper>
  );
}

export default Index;
