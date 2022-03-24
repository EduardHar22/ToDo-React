import "./Main.css"
export default function Main({ item, todo, dispatch }){

    return (  
        <div className='todos_div'>
            <input type="checkbox" onChange={() => {
                dispatch({
                    type: "checkbox_change",
                    payload: item
                })
                }}/>
            <h1>{item.text}</h1>
            <button onClick={() => {
              dispatch({
                    type: "delete",
                    payload: item.id
              })
            }}>X</button>
        </div>
    )
}