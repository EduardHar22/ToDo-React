import './Footer.css'

export default function Footer({todo, setTodo}){
    let length = todo.filter((item) => item.isCompleted).length;
    
    return(
        <div className='footer_content'>
            <h1>{length}/{todo.length} Completed</h1>
            <button onClick={() => {
                setTodo(todo.filter((item) => !item.isCompleted))
            }}>Clear Completed</button>
        </div>
    )
}