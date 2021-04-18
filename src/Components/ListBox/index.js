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
      "Join the courses Sales Bootcamp [Free Live Workshops]",
      "12 Steps to Creating Awesome Live Classes in 2021",
      "Guys KawaSakion the future of Business in the Midst of a Pandemic",
      "What is Educational Marketing & How to Use it to Grow with Examples"
    ]);
    const [blogsHistory] = useState([
      "7 days ago",
      "12 days ago",
      "20 days ago",
      "22 days ago",
      "23 days ago"
    ]);
    const [eventsLogs] = useState([
      "hubx Logged in moreinfo Guys KawaSakion the futures"
    ]);
    const [eventHistory] = useState(["22 minutes"]);

    let title = '';
    let items = [];
    let history = [];
    if (props.type === 'blogs'){
      title = titles[0];
      items = blogs;
      history = blogsHistory;
    }
    else if (props.type === 'events'){
      title = titles[1];
      items = eventsLogs;
      history = eventHistory;
    }
  return (
    <Wrapper>
        <ListHeading title = {title}/>
        <ListItems items = {items} history = {history}/>
    </Wrapper>
  );
}

export default Index;
