import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { ThingsContext } from '../App';
import { useContext } from 'react';

const Form = (props) => {
  const [thing, setThing] = useState({ title: '', id: uuid() });
  const { addNewThing } = useContext(ThingsContext);

  const onChange = e => setThing(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onClick = e => {
    e.preventDefault();
    addNewThing(thing);
    setThing({ title: '', id: uuid() })
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="Title" name="title" value={thing.title} onChange={onChange} />
      </fieldset>
      <button onClick={onClick}>Save</button>
    </form>
  )
}

export default Form
