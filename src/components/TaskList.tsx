import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import './TaskList.css'

import { ITask } from '../interfaces/Task'

type Props = {
  taskList: ITask[]
  editTask(task: ITask): void;
  deleteTask(title: string): void 
}

const TaskList = ({taskList, deleteTask, editTask}: Props) => {
  return (
    <div className='task-list'>{taskList.length > 0 ? (
      taskList.map((task, index) => (
        <div key={index} className="task-item">
          <p>{task.priority}</p>
          <h4>{task.title}</h4>
          <button><i className="fa-solid fa-pen-to-square" onClick={() => editTask(task)}></i></button>
          <button><i className="fa-solid fa-xmark" onClick={() => deleteTask(task.title)}></i></button>
        </div>
      ))
    ) : (
      <p>Não há tarefas cadastradas</p>
    )}</div>
  )
}

export default TaskList