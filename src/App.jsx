import { useState, createContext } from 'react'
import Form from './components/Form'
import ThingsList from './components/ThingsList'
import './App.css'

export const ThingsContext = createContext()

function App() {
  const [things, setThings] = useState([]);

  const handleThingChange = (thing) => setThings(oldThings => [...oldThings, thing])

  return (
    <div className="App">
      <ThingsContext.Provider value={{ things, handleThingChange }}>
        <Form />
        <ThingsList />
      </ThingsContext.Provider>
    </div>
  )
}

export default App
