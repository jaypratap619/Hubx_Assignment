import React from 'react';
import { Wrapper } from './style';
import icon1 from '../../../assets/images/shopping-cart.svg';
import icon2 from '../../../assets/images/pulse-line.svg';
function index(props) {
  let icon = '';
  if (props.title === 'How to sell Courses blog') {
    icon = icon1;
  }
  else {
    icon = icon2;
  }
  return (
    <>
      <Wrapper>
        <img className='headingIcon' src={icon} alt='sqaure smiley logo' />
        <p>{props.title}</p>
        <button className='button button1'>see all</button>
      </Wrapper>
    </>
  );
}

export default index;