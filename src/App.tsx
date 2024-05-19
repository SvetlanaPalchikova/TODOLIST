import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";



function App() {
    //BLL(бизнеслогика)
    const todoListTitle:string ="What to learn"

    const tasks: Array< TaskType>= [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS/TS"},
        {id: 3, isDone: false, title: "REACT"},
        {id: 4, isDone: true, title: "REDUX"},

    ]

    //UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}/>

        </div>
    );
}

export default App;
