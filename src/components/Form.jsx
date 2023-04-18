import React from 'react'
import { useState } from 'react'
import { ThingsContext } from '../App';
import { useContext } from 'react';

const Form = (props) => {
  const [thing, setThing] = useState('');
  const { handleThingChange } = useContext(ThingsContext);

  const onChange = e => setThing(e.target.value);
  const onClick = e => {
    e.preventDefault();
    handleThingChange(thing);
  }

  return (
    <form>
      <input type="text" placeholder="Thing" name="thing" value={thing} onChange={onChange} />
      <button onClick={onClick}>Save</button>
    </form>
  )
}

export default Form
