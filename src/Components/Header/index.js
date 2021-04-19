import React from 'react';
import { Wrapper } from './style';
import { PlusOutlined, EyeOutlined, PoweroffOutlined, QuestionOutlined } from '@ant-design/icons';
function index() {
  return (
    <Wrapper>
      <div className='bold-20'>Dashboard</div>

      <ul>
        <li>
          <div className='icon-box ml-20'><PlusOutlined /></div>
          <div className='icon-text'>Create course</div>
        </li>
        <li>
          <div className='icon-box ml-20'><EyeOutlined /></div>
          <div className='icon-text'>Preview home page</div>
        </li>

        <li>
          <div className='icon-box ml-20'>
            <EyeOutlined />
          </div>
          <div className='icon-text'>Preview after login page</div>
        </li>
        <li>
          <div className='icon-box ml-20'><PoweroffOutlined /></div>
          <div className='icon-text'>View welcome screen</div>
        </li>
      </ul>
          <div className='help'><QuestionOutlined style={{ color: '#fff' }} /></div>
          <div className='icon-text'>Help</div>
    </Wrapper>
  );
}

export default index;
