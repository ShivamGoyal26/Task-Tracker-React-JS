import { FaTimes } from 'react-icons/fa'

const Task = props => {
    return (
        <div
        onDoubleClick ={()=> props.onToggle(props.data.id)}
            key={props.key}
            className={`task ${props.data.reminder ? 'reminder' : ''}`}>
            <h3>{props.data.text}
                <FaTimes 
                onClick = {() => props.action(props.data.id)}
                style={{ color: 'red', cursor: 'pointer' }} />
            </h3>
            <p>{props.data.day}</p>

        </div>
    )
}

export default Task
