import React from 'react'

const Todo = ({ todo }) => {
    const {id, text, completed} = todo
  return (
    <div data-testid={`todo-test-${id}`}>
        <label>
            <input type='checkbox' checked={completed}></input>
        </label>
        {text}
    </div>
  )
}

export default Todo
