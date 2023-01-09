export const Button = ({addTask}) =>
{
    return (
        <button onClick={addTask}>Add Task</button>
    )
}
export const UpdateButton = ({updateTask,item})=>
{
    return (
        <button onClick={()=>updateTask(item.id)}>Update</button>
    )
}
export const DeleteButton = ({deleteTask,item}) =>
{
    return(
        <button onClick={()=>deleteTask(item.id)}>Delete</button>
    )
}
export const EditButton = ({editTask,item}) =>
{
    return(
        <button onClick={()=>editTask(item.id)}>Edit</button>
    )
}