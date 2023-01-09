

export const TodoInput = ({type,value,placeholder,onChangeFunc}) =>
{
    return(
        <div>
            <input type= {type}
             value={value} 
             placeholder={placeholder}
             onChange={(e)=>onChangeFunc(e.target.value)}
            >
            </input>
        </div>
    )


}
// TodoInput.defaultProps = {
//     type:"text",
//     placeholder:"Enter the task"
// }

 export const UpdateInput = (type,value,onChange) =>
 {
    return(
        <div>
            <input type= {type}
             value={value} 
             placeholder={placeholder}
             onChange={(e)=>onChange(e.target.value)}
            >
            </input>
        </div>
    )
 }



// export default TodoInput;