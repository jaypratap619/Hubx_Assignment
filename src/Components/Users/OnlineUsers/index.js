import React from 'react';
import { Wrapper } from './style';
import { UserAddOutlined } from '@ant-design/icons';
import company from '../../../assets/images/smiling-emoticon-square-face.svg';
function index() {
    return (
        <Wrapper>
            <div className='row'>
                <div className='icon-box ml-10'>
                    <UserAddOutlined />
                </div>
                <div className='bold-15'>Online users (1)</div>
            </div>
            <div className='row'>
                <div className='icon-box ml-10'>
                    <img className='company-icon' src={company} alt='sqaure smiley logo' />
                </div>
                <div className='icon-text'>
                    <div className='row-text'>HubX</div>
                    <div className='row-text'>24 minutes</div>
                </div>
                <button className='button button1'>contact</button>
            </div>
        </Wrapper>


    );
}

export default index;
