import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import StatusIcon from './Components/StatusIcon';
import TrailPeriod from './Components/TrailPeriod';
import LineChart from './Components/LineChart'
import NewUsers from './Components/Users/NewUsers'
import OnlineUsers from './Components/Users/OnlineUsers';
import ListBox from './Components/ListBox';


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='row'>
        <LineChart />
        <StatusIcon />
      </div>
      <div className='row'>
        <NewUsers />
        <ListBox type='blogs' />
        <ListBox type='events' />
        <div className = 'col'>
          <TrailPeriod />
          <OnlineUsers />
        </div>
      </div>

    </div>
  );
}

export default App;