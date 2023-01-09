import {useState} from "react";
import { v4 as uuidv4,v4 } from "uuid";
// import "./ToDoApp.css";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const TodoList = ({updateTodo,editTask,deleteTask}) =>
{
    return(
        <div>
            <h1>Todo List</h1>
            {
                    todoList.map((item)=>{
                        return (
                        <li key={item.id}>
                            {item.id === editTodo ?
                            (
                                <div>
                                    <input type="text" className="todo-input" value={newVal} placeholder={item.taskTitle} onChange={(e)=>setNewValue(e.target.value)}>
                                    </input>
                                    <button className='todo-button edit' onClick={()=>updateTodo(item.id)}>Update</button>
                                    </div>
                            ):
                            (
                                <div className="icons">
                                    <p className="todo-input">{item.taskTitle}</p>
                                    <RiCloseCircleLine className='delete-icon' onClick={()=>deleteTask(item.id)}>Delete</RiCloseCircleLine>
                                    <TiEdit className='edit-icon' onClick={()=>editTask(item.id)}>Edit</TiEdit>
                                    </div>  
                            )
                        }
                            
                        </li>
                        )
                    })
                }
        </div>
    )
}
export default TodoList;