import { useState } from 'react'
import Form from './components/Form'
import ThingsList from './components/ThingsList'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [things, setThings] = useState([]);

  const handleThingChange = (thing) => setThings(oldThings => [...oldThings, thing])

  return (
    <div className="App">
      <Form handleThingChange={handleThingChange} />
      <ThingsList things={things} />
    </div>
  )
}

export default App
