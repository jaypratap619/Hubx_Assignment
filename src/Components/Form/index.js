import React from 'react';
import { Wrapper } from './style';
import DonutChart from './DonutChart'
function index() {
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
                    <input type="submit" defaultValue="Join Our Event" placeholder="Join Our Event"/>
                </form>
            </Wrapper>
            <Wrapper>
                <DonutChart />
            </Wrapper>
        </>

    );
}

export default index;