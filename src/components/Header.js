import {useState} from 'react'
import Button from './Button'

const Header = props => {
    return (
        console.log("Header"),
        <header className = "header">
            <h1>{props.title}</h1>
           <Button 
           title = "ADD"
           onClick = {() => {
               props.show()
            }}
           />

        </header>
    )
}

Header.defaultProps = {
    title: 'Task'
}




export default Header
