import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    //BLL(бизнеслогика)
    const todoListTitle_1:string ="What to learn"
    const todoListTitle_2: string ="What to buy"
    return (
        <div className="App">
            <TodoList title={todoListTitle_1}/>
            <TodoList title={todoListTitle_2}/>

        {/* если бы это был обычный JS мы бы написали TodoList(), посути вызвали здесь функцию*/}
        </div>
    );
}

export default App;
