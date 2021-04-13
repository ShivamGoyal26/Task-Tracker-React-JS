import Task from './Task'


const Tasks = props => {
    return (
        <>
            {props.data.map((data, index) => (
                <Task 
                onToggle = {props.onToggle}
                action = {props.action}
                key = {index}
                data = {data}
                />
            ))}
        </>
    )
}

export default Tasks

