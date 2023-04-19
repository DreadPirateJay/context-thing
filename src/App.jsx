import { useEffect, useState, createContext } from 'react'
import Form from './components/Form'
import ThingsList from './components/ThingsList'
import './App.css'

export const ThingsContext = createContext()

const App = () => {
  const [things, setThings] = useState([]);

  const addNewThing = (thing) => setThings(prev => {
    const newThings = [...prev, thing]
    saveThings(newThings)
    return newThings
  })

  const updateThings = (thing) => setThings((prev) => {
    const newThings = prev.map((t) => t.id !== thing.id ? t : thing);
    saveThings(newThings)
    return newThings;
  })

  const removeThing = (thing) => setThings((prev) => {
    const newThings = prev.filter((t) => t.id !== thing.id)
    saveThings(newThings)
    return newThings
  })

  const saveThings = (things) => {
    try {
      localStorage.setItem('things', JSON.stringify(things))
    } catch (err) {
      console.error(err);
    }
  }

  const getAllThings = () => {
    try {
      const storedThings = JSON.parse(localStorage.getItem('things'));
      if (storedThings.length) {
        setThings(storedThings);
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getAllThings();
  }, [])

  return (
    <div className="App">
      <ThingsContext.Provider value={{ things, addNewThing, updateThings, removeThing }}>
        <Form />
        <ThingsList />
      </ThingsContext.Provider>
    </div>
  )
}

export default App
