import React from 'react';
import { Wrapper } from './style';
import { PlusOutlined, EyeOutlined, PoweroffOutlined, QuestionOutlined } from '@ant-design/icons';
function index() {
  return (
    <Wrapper>
      <div className='bold-20'>Dashboard</div>
      <div className='icon-box ml-30'>
        <PlusOutlined />
      </div>
      <div className='icon-text'>Create course</div>
      <div className='icon-box ml-20'>
        <EyeOutlined />
      </div>
      <div className='icon-text'>Preview home page</div>
      <div className='icon-box ml-20'>
        <EyeOutlined />
      </div>
      <div className='icon-text'>Preview after login page</div>
      <div className='icon-box ml-20'>
        <PoweroffOutlined />
      </div>
      <div className='icon-text'>View welcome screen</div>

      <div className='help'>
        <QuestionOutlined style={{ color: '#fff' }} />
      </div>
      <div className='icon-text'>Help</div>
    </Wrapper>
  );
}

export default index;
