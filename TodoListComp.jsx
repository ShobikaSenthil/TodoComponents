import React from "react";
// import TodoInput from "./TodoInput";
import  { DeleteButton, UpdateButton,EditButton} from "./Button";
import { UpdateInput } from "./TodoInput";

const TodoListComp = ({ todoList, deleteTask, editTask, updateTodo, editTodo ,newVal ,setNewValue }) => {
    return (
        <div>
            {
                todoList.map((item) => {
                    if(item.id === editTodo) 
                    {
                        return(
                        <div>
                            {/* <input type="text" value={newVal} onChange={(e) => setNewValue(e.target.value)}>
                            </input> */}
                            <UpdateInput type={text} value={newVal} placeholder={item.title} onChange={(e)=>setNewValue(e.target.value)}/>
                            {/* <TodoInput type="text" value={newVal} placeholder={item.title} onChangeUpdate={(val)=>setNewValue(val)} /> */}
                            <UpdateButton item={item} updateTask={()=>updateTodo(item.id)}/>
                        </div>
                        )
                    }
                    else {
                        return(
                        <li key={item.id}>{item.taskTitle}
                            <EditButton item={item} editTask={()=>editTask(item.id)}/>
                            <DeleteButton item={item} deleteTask={()=>deleteTask(item.id)}/>
                        </li>
                        )
                    }
                })
            }
        </div>
    )

}
export default TodoListComp;