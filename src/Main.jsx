import "./Main.css"
export default function Main({item, todo, setTodo}){

    function filtered(){
        let filteredTodo = todo.filter((elem) => item.id !== elem.id) 
        return filteredTodo
    }

    return (  
        <div className='todos_div'>
            <input type="checkbox" onChange={() => {
                item.isCompleted = !item.isCompleted
                setTodo([
                ...todo
                ])
                }}/>
            <h1>{item.text}</h1>
            <button onClick={() => {
              setTodo(filtered)
            }}>X</button>
        </div>
    )
}