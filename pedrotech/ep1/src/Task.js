export const Task = (props) => {
  return (
    <div className='tasklist' key={props.index}>
        {props.taskName}
        <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}

