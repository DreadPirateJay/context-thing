import { useState, useContext } from 'react'
import { ThingsContext } from '../App';

const Thing = (props) => {
  const { updateThings, removeThing } = useContext(ThingsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [thing, setThing] = useState(props.thing);

  const onTitleChange = (e) => setThing(prev => {
    return { ...prev, [e.target.name]: e.target.value };
  });

  const onEdit = () => {
    setIsEditing(true);
  }

  const onSave = () => {
    setIsEditing(false);
    updateThings(thing);
  }

  const onDelete = () => {
    removeThing(thing);
  }

  return (
    <div className="form-group">
      {isEditing
        ? <input type="text" name="title" value={thing.title} onChange={onTitleChange} />
        : <p>{thing.title}</p>}
      {isEditing
        ? <button onClick={onSave}>Save</button>
        : <button onClick={onEdit}>Edit</button>}

      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Thing
