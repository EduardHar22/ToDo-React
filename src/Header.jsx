import { useState } from "react"
import "./Header.css"
export default function Header({setTodo}){
    const [text, setText] = useState("")

    return(
        <div className='input_div'>

            <input type="text" placeholder='Type Something' value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button onClick={() => {
                if(text.length !== 0){
                setTodo((prev) => [
                    ...prev,
                    {
                        id: Math.random(),
                        text: text,
                        isCompleted: false,
                    }
                ])
                setText('')
                }
            }}>Add</button>
        </div>
    )
}