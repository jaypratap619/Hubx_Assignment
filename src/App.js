import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar'
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
      <div className='row1'>
        <div className='col1'>
          <NavBar />
          <LineChart />
        </div>
        <div className='col2'>
          <StatusIcon />
        </div>
      </div>
      <div className='row2'>
        <NewUsers />
        <ListBox type='blogs' />
        <ListBox type='events' />
        <div className='col3'>
          <TrailPeriod />
          <OnlineUsers />
        </div>
      </div>

    </div>
  );
}

export default App;