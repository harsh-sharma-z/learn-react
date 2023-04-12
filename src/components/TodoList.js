import React from 'react'


const Todos=[
    {name:"sleeping",isDone:true},
    {name:"eating",isDone:false},

    {name:"gaming",isDone:true},

    {name:"coding",isDone:false}
]
export const TodoList = () => {
  return (
    <div>
        {

            <ul>
                {
                 Todos.map((todo)=>{
                return <li>{todo.name}</li>
            })
        }
            </ul>
           
        }
    </div>
  )
}
