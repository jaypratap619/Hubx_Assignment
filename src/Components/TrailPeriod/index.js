import React from 'react';
import { Wrapper } from './style';
import { HourglassOutlined, QuestionOutlined } from '@ant-design/icons';
function index() {
    return (
        <Wrapper>
            <div className='row'>
                <div className='bold-15'>Trail period</div>
                <div className='icon-box'>
                    <HourglassOutlined />
                </div>
            </div>
            <br />
            <div className='row'>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="white" stroke-width="3" fill="#55ccc1" />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".01em">30</text> 
                    <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".9em">days left</text> 
                </svg>
            </div>
            <div className='row'>
                <button className='button button1'>Invite</button>
                <button className='button button2'>Upgrade now! &gt;&gt;</button>
            </div>
        </Wrapper>

    );
}

export default index;
