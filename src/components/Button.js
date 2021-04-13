const Button = props => {
    return (
        console.log("Button"),
        <button 
        onClick = {props.onClick}
        style = {{backgroundColor: props.color}}
        className = 'btn'>{props.title}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
