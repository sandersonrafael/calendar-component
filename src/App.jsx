import Calendar from './components/Calendar/index.jsx';
import { useState } from 'react';

function App() {
  const [responseObj, setResponseObj] = useState({});
  console.log(responseObj);

  return <Calendar setReturn={setResponseObj} />;
}

export default App;
