import './Footer.css';


export default function Footer({todo, dispatch}){
    let length = todo.filter((item) => item.isCompleted).length;
    
    return(
        <div className='footer_content'>
            <h1>{length}/{todo.length} Completed</h1>
            <button onClick={() => {
                dispatch({
                    type: "clear",
                    payload: todo.isCompleted,
                })
            }}>Clear Completed</button>
        </div>
    )
}