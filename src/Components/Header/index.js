import React from 'react';
import { Wrapper } from './style';
import { PlusOutlined, EyeOutlined, PoweroffOutlined, QuestionOutlined } from '@ant-design/icons';
function index() {
  return (
    <Wrapper>
      <a href='/' className='bold-20 '>Dashboard</a>

      <ul>
        <li>
          <div className='icon-box ml-20'><PlusOutlined /></div>
          <a href='/' className='icon-text'>Create course</a>
        </li>
        <li>
          <div className='icon-box ml-20'><EyeOutlined /></div>
          <a href='/' className='icon-text'>Preview home page</a>
        </li>

        <li>
          <div className='icon-box ml-20'><EyeOutlined /></div>
          <div className='icon-text'>Preview after login page</div>
        </li>
        <li>
          <div className='icon-box ml-20'><PoweroffOutlined /></div>
          <a href='/' className='icon-text'>View welcome screen</a>
        </li>
      </ul>
      <div className='help'><QuestionOutlined style={{ color: '#fff' }} /></div>
      <a href='/' className='icon-text'>Help</a>
    </Wrapper>
  );
}

export default index;
