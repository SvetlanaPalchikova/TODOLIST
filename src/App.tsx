import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";



function App() {
    //BLL(бизнеслогика)
    const todoListTitle_1:string ="What to learn"
    const todoListTitle_2: string ="What to buy"
    const tasks_1: Array< TaskType>= [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS/TS"},
        {id: 3, isDone: false, title: "REACT"},
        {id: 4, isDone: true, title: "REDUX"},

    ]
    const tasks_2: Array<TaskType>= [
        {id: 5, isDone: true, title: "Apple"},
        {id: 6, isDone: true, title: "Lemon"},
        {id: 7, isDone: false, title: "GrapeFruit"},
        {id: 8, isDone: true, title: "PineApple"},

    ]

    //UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>

        {/* если бы это был обычный JS мы бы написали TodoList(), посути вызвали здесь функцию*/}
        </div>
    );
}

export default App;
