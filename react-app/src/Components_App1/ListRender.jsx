import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [todos, setTodos] = useState([
        {title: "Todo 01",
            desc: "I am a good Todo and first"
        },
        {title: "Todo 02",
            desc: "I am a good Todo and second"
        },
        {title: "Todo 03",
            desc: "I am a good Todo and third"
        },
    ])
    const Todo = ({todo})=> {return(<>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
        </>)}
  return (
    <div>
      {/*List Rendering in React*/}
      {todos.map(t=>{
        return <Todo key={t.title} todo={t}/>
      })}
    </div>
  )
}

export default ListRender
