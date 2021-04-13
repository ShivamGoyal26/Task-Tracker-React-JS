import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const tasks = [
  {
    id: 1,
    text: "Doctor Appointment",
    day: "Feb-5th at 2:30Pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Corona Appointment",
    day: "Feb-15th at 2:30Pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Get Vaccine",
    day: "Feb-2th at 2:30Pm",
    reminder: false,
  },
]

const App = () => {

  const [data, setData] = useState(tasks)
  const [show, setShow] = useState(false)

  const name = "Brad"

  // Add Tasks
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setData([...data, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setData(data.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setData(data.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="App">
      <Header
      show = {()=>setShow(!show)}
        title="Task Tracker"
      />
     {
       show ?  <AddTask 
       addTask = {addTask}
       closeAddForm = {() => setShow(false)}
       /> : null
     }
      {
        data.length === 0 ?
          <p>No Task yet, Let's Add some</p> : <Tasks
            data={data}
            action={deleteTask}
            onToggle={toggleReminder}
          />
      }
    </div>
  );
}

export default App;
