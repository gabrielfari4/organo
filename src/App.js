import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [employees, setEmployees] = useState([])

  return (
    <div className="App">
      <Banner />
      <Form />
    </div>
  );
}

export default App;
