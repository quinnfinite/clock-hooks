import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock.jsx';
import moment from 'moment';

function App(){
  const currentTime = moment().format('LTS');
  const [time, updateTime] = useState(currentTime)
  const tick = () => {
    updateTime(moment().format('LTS'));
  }
  setInterval(tick, 1000);
  return(
    <div>
      <h1>App Component</h1>
      <Clock time={time}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))