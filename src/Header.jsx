import { useState } from "react"
import "./Header.css"
export default function Header({ dispatch }){
    const [text, setText] = useState("")

    return(
        <div className='input_div'>

            <input type="text" autoFocus placeholder='Type Something' value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button onClick={() => {
                if(text.length !== 0){
                dispatch({
                    type: "add",
                    payload: text
                })
                setText('')
                }
            }}>Add</button>
        </div>
    )
}