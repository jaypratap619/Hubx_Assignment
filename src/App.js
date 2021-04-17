import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import StatusIcon from './Components/StatusIcon';
import TrailPeriod from './Components/TrailPeriod';
import LineChart from './Components/LineChart'
import Users from './Components/Users'
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='row'>
      <LineChart />
      <StatusIcon />
      </div>
      <div className='row'>
      <Users />
      <TrailPeriod />
      </div>
      
    </div>
  );
}

export default App;
