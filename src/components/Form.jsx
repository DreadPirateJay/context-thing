import React from 'react'
import { useState } from 'react'

const Form = (props) => {
  const [thing, setThing] = useState('');

  const onChange = e => setThing(e.target.value);
  const onClick = e => {
    e.preventDefault();
    props.handleThingChange(thing);
  }

  return (
    <form>
      <input type="text" placeholder="Thing" name="thing" value={thing} onChange={onChange} />
      <button onClick={onClick}>Save</button>
    </form>
  )
}

export default Form
