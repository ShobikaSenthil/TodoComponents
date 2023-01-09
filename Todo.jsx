import {useState} from "react";
// import { RiUploadCloudFill } from "react-icons/ri";
import TodoInput from "./TodoInput"
// import TodoList from "./TodoList";
import TodoListComp from "./TodoListComp";
import { v4 as uuidv4,v4 } from "uuid";
import {Button} from "./Button";
import { TodoInput } from "./TodoInput";

const Todo = () =>{
const [todo,setTodo] = useState("");
const [todoList,setTodoList] = useState([]);
const [editTodo,setEditTodo] = useState(null);
const [newVal,setNewValue] = useState("");

const addTask = () =>
{
    if(!todo){
        alert("Enter the task");
    }
    else{
    setTodoList((prevState)=>[...prevState,{ id : v4(),taskTitle : todo }]);
    setTodo("");
    }
}
const deleteTask = (id) =>
{
    setTodoList((prevState) =>
    {
        return prevState.filter((item) => item.id !== id);
    })
}
    
const editTask = (id) =>
    {
        setEditTodo(id);
        
    }

const updateTodo = (id) =>
    {
        setTodoList((prevState)=>{
            return prevState.map((items)=>{
                if(items.id===id){
                    items.taskTitle=newVal;
                }
                return items
            })
        })
        setEditTodo(null);
        setNewValue("");
    }

return(
        <>
            <h1>ToDo App</h1>
            <TodoInput value={todo} onChangeFunc={(val)=>setTodo(val)}/>
            <Button addTask={addTask}></Button>
            {/* <TodoList todoList={todoList} setTodoList={setTodoList}/> */}
            <TodoListComp todoList = {todoList} 
                deleteTask={(val)=>deleteTask(val)} 
                updateTask={(val)=>updateTask(val)} 
                editTask={(val)=>editTask(val)} 
                updateTodo={(val)=>updateTodo(val)} 
                editTodo={editTodo} 
                newVal={newVal}
                setNewValue = {setNewValue}>
            </TodoListComp>
             
        </>
    )
}
export default Todo;