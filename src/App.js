import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import StatusIcon from './Components/StatusIcon';
import TrailPeriod from './Components/TrailPeriod';
function App() {
  return (
    <div className='App'>
      <Header />
      <StatusIcon />
      <TrailPeriod />
    </div>
  );
}

export default App;
