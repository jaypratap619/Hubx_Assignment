import React from 'react';
import { Wrapper } from './style';
import {
  UserAddOutlined,
  ReloadOutlined,
  ShoppingOutlined,
  FieldTimeOutlined,
  FileSearchOutlined,
  ArrowsAltOutlined,
} from '@ant-design/icons';
import { Row, Col } from 'antd';

function index() {
  const data = [
    { icon: <UserAddOutlined />, text1: 'All Users', text2: '1' },
    { icon: <ReloadOutlined />, text1: 'Conversions', text2: '0%' },
    { icon: <ShoppingOutlined />, text1: '30 days sales', text2: '0' },
    { icon: <FieldTimeOutlined />, text1: 'Avg time', text2: '0 min' },
    { icon: <FileSearchOutlined />, text1: 'Courses', text2: '0' },
    { icon: <ArrowsAltOutlined />, text1: 'Course categories', text2: '0' },
  ];

  const IconBox = ({ icon, text1, text2 }) => (
    <div className='icon-box'>
      {icon}
      <div className='icon-text'>{text1}</div>
      <div className='icon-count'>{text2}</div>
    </div>
  );

  return (
    <Wrapper>
      <Row>
        {data?.map((obj) => (
          <Col span={8}>{IconBox(obj)}</Col>
        ))}
      </Row>
    </Wrapper>
  );
}

export default index;
