import React from 'react'

const Todo = ({ todo }) => {
    const {id, text, completed} = todo;
    const [ checked, setchecked] = React.useState(completed);
  return (
    <div data-testid={`todo-test-${id}`}>
        <label>
            <input type='checkbox' checked={checked} id='checkbox' onChange={() => setchecked(!checked)}></input>
        </label>
        {text}
    </div>
  )
}

export default Todo
