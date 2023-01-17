import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import './Form.css'

import { ITask } from '../interfaces/Task'

type Props = {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id: number, title: string, priority: string): void;
}

const Form = ({ btnText , taskList, setTaskList, task, handleUpdate}: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [priority, setPriority] = useState<string>('')

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setPriority(task.priority);
    }
  }, [task]);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(handleUpdate);
    if (taskList) {
      if (handleUpdate) {
        console.log(title);
        console.log(priority);
        handleUpdate(id, title, priority);
      } else {
        const id = Math.floor(Math.random() * 1000);

        const newTask: ITask = { id, title, priority };

        setTaskList!([...taskList, newTask]);

        setTitle("");
        setPriority('');
      }
    }
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setPriority(e.target.value);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className='row'>
        <label htmlFor="title">Tarefa:</label>
        <input type="text" placeholder="digite aqui" name="title" onChange={handleInput} value={title}/>
      </div>
      <div className='row'>
        <label htmlFor="priority">Nível de prioridade:</label>
        <input type="text" placeholder="digite aqui" name="priority" onChange={handleInput} value={priority}/>
      </div>
      <div className="row teste">
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default Form