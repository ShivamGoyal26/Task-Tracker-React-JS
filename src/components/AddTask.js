import { useState } from 'react'

const AddTask = props => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("please add a task")
            return
        }

        props.addTask({ text, day, reminder })
        props.closeAddForm()

        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form
            onSubmit={onSubmit}
            className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day Or Time</label>
                <input
                    type="text"
                    placeholder="Add Day Or Time"
                    value={day}
                    onChange={(e) => {
                        setDay(e.target.value)

                    }}
                />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => {
                        console.log("HHHHH", e.target.value)
                        setReminder(e.target.checked)
                    }}
                />
            </div>

            <input
                type="submit"
                value="Save Task"
                className="btn btn-block"
            />
        </form>
    )
}


export default AddTask
