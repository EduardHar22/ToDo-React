import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([

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

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="container">
        <Header setTodo={setTodo} />
        <div className='main_content'>
          {todo.map((item) => <Main key={item.id} todo={todo} setTodo={setTodo} item={item} />)}
        </div>
        <Footer todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  );
}

export default App;
