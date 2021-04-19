import React from 'react';
import { Wrapper } from './style';
import { PlusOutlined, EyeOutlined, PoweroffOutlined, QuestionOutlined } from '@ant-design/icons';
function index() {
  return (
    <Wrapper>
      <a href='/' className='bold-20 '>Dashboard</a>

      <ul>
        <li>
          <a href='/' className='icon-box ml-20'><PlusOutlined /></a>
          <a href='/' className='icon-text'>Create course</a>
        </li>
        <li>
          <a href='/' className='icon-box ml-20'><EyeOutlined /></a>
          <a href='/' className='icon-text'>Preview home page</a>
        </li>

        <li>
          <a href='/' className='icon-box ml-20'>
            <EyeOutlined />
          </a>
          <a href='/' className='icon-text'>Preview after login page</a>
        </li>
        <li>
          <a href='/' className='icon-box ml-20'><PoweroffOutlined /></a>
          <a href='/' className='icon-text'>View welcome screen</a>
        </li>
      </ul>
      <a href='/' className='help'><QuestionOutlined style={{ color: '#fff' }} /></a>
      <a href='/' className='icon-text'>Help</a>
    </Wrapper>
  );
}

export default index;
