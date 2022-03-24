import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { useReducer } from 'react';

function reducer(state, action){
  switch(action.type){
    case "add":{
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload,
          isCompleted: false
        }
      ]
    }
    case "checkbox_change":{
      return state.map((item) => {
        if(item.id === action.payload.id){
          return {
            ...item, 
            isCompleted: !item.isCompleted
          }
        }
        return item
      })
    }
    case "delete":{
      return state.filter((elem) => action.payload !== elem.id)
    }
    case "clear":{
      return state.filter((item) => !item.isCompleted)
    }
  }
}

function App() {
  
  const [todo, dispatch] = useReducer(reducer,[
   
    {
      id: Math.random(),
      text: "React",
      isCompleted: false
    },

    {
      id: Math.random(),
      text: "Html",
      isCompleted: false
    },

    {
      id: Math.random(),
      text: "Css",
      isCompleted: false
    },

  ])
  console.log(todo)
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="container">
        <Header dispatch={dispatch} />
        <div className='main_content'>
          {todo.map((item) => <Main key={item.id} todo={todo} dispatch={dispatch} item={item} />)}
        </div>
          <Footer todo={todo} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
