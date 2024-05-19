import React from 'react';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList: React.FC<TodoListPropsType> = ({title, tasks}) => {
    const listItems: Array<JSX.Element> = []
    for (let i=0; i<tasks.length; i++) {
        const newListItem = <li>
            <input type="checkbox" checked={tasks[i].isDone}/>
            <span>{tasks[i].title}</span>
            <button>X</button>
        </li>
        listItems.push(newListItem)
    }
    return (
        <div>
            <div className="todolist">
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {listItems}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;