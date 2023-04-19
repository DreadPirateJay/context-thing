import { useContext } from "react"
import { ThingsContext } from "../App"
import Thing from "./Thing";

const ThingsList = () => {
  const { things } = useContext(ThingsContext);

  return (
    <ul>{things.map((thing) => <Thing key={thing.id} thing={thing} />)}</ul>
  )
}

export default ThingsList
