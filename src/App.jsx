import Calendar from './components/Calendar/index.jsx';
import monthsList from './utils/monthsList.js';
import daysList from './utils/daysList.js';
import { useState } from 'react';

function App() {
  const [responseObj, setResponseObj] = useState({});
  console.log(responseObj);

  return <Calendar setReturn={setResponseObj} />;
}

export default App;
