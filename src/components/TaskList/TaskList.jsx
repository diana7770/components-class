import React, { Component } from "react";
import style from "./TaskList.module.css";

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Прочитати конспект" },
    { id: 2, text: "Написати додаток" },
    { id: 3, text: "Перевірити роботу" },
    { id: 4, text: "Відправити дз" },
  ];

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h2 className={style.task__title}>Список завдань:</h2>
        <ul className={style.task__list}>
          {TaskList.tasks.map((task) => (
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
