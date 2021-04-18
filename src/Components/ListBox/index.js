import React, { useState } from 'react';
import { Wrapper } from './style';
import ListHeading from './ListHeading';
import ListItems from './ListItems'
function Index(props) {
    const [titles] = useState([
        "How to sell Courses blog",
        "Event Log"
    ]);
    const [blogs] = useState([
      "Blended Learning: What it is, Why it Matters & How to Apply",
      "Join the courses Sales",
      "12 Steps to Creating Awesome Live Classes in 2021",
      "Guys KawaSakion the future of Business in the Midst of a Pandemic",
      "What is Educational Marketing & How to Use it to Grow with Examples"
    ]);
    const [eventsLogs] = useState([
      "hubx Logged in moreinfo Guys KawaSakion the future"
    ]);


    let title = '';
    let items = [];
    if (props.type === 'blogs'){
      title = titles[0];
      items = blogs;
    }
    else if (props.type === 'events'){
      title = titles[1];
      items = eventsLogs;
    }
  return (
    <Wrapper>
        <ListHeading title = {title}/>
        <ListItems items = {items}/>
    </Wrapper>
  );
}

export default Index;
