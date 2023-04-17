import React from 'react'

const ThingsList = (props) => {
  return (
    <ul>{props.things.map(thing => <li>{thing}</li>)}</ul>
  )
}

export default ThingsList
