import React, { useState } from 'react';
import { Wrapper } from './style';
import DonutChart from './DonutChart';
import { Slider } from 'rsuite';
import "rsuite/dist/styles/rsuite-default.min.css";

function Index() {
    const [v1, setV1] = useState(50);
    const [v2, setV2] = useState(50);
    return (
        <>
            <Wrapper>
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label htmlFor="lname">Email</label>
                    <input type="email" id="Email" name="email" placeholder="Your Email" />
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="india">India</option>
                    </select>
                    <input type="submit" defaultValue="Join Our Event" placeholder="Join Our Event" />
                </form>
            </Wrapper>
            <h5>Number of invite : {v1}</h5>
            <br />
            <Slider
                progress
                value={v1}
                max={100}
                min={0}
                onChange={value => {
                    setV1(value);
                }}
            />
            <Wrapper>
                <DonutChart v1={v1} v2={v2} />
            </Wrapper>
            <h5>Duration of Event : {v1}</h5>
            <br />
            <Slider
                progress
                value={v2}
                max={100}
                min={0}
                onChange={value => {
                    setV2(value);
                }}
            />
            <h5>Price : {v1 * v2} </h5>
        </>

    );
}

export default Index;