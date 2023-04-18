import { useContext } from "react"
import { ThingsContext } from "../App"

const ThingsList = () => {
  const { things } = useContext(ThingsContext);

  return (
    <ul>{things.map((thing, idx) => <li key={idx}>{thing}</li>)}</ul>
  )
}

export default ThingsList
