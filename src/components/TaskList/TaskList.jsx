import React, { Component } from "react";
import style from "./TaskList.module.css";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "Прочитати конспект" },
        { id: 2, text: "Написати додаток" },
        { id: 3, text: "Перевірити роботу" },
        { id: 4, text: "Відправити дз" },
      ],
    };
  }

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h2 className={style.task__title}>Список завдань:</h2>
        <ul className={style.task__list}>
          {this.state.tasks.map((task) => (
            <li className={style.task__item} key={task.id}>
              {task.text}
              <button
                className={style.task__button}
                onClick={() => this.deleteTask(task.id)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
