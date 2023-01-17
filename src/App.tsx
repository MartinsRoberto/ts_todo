import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Modal from './components/Modal'
import TaskList from './components/TaskList'

import { ITask } from './interfaces/Task'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  
  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      })
    );
  };

  const toggleModal = (display:boolean) => {
    const modal = document.querySelector('.modal')

    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
    
  }

  const editTask = (task: ITask): void => {
    toggleModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number, title: string, priority: string) => {
    const updatedTask: ITask = { id, title, priority };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    toggleModal(false);
  };

  return (
    <div className="App">
      <Modal
        title="Editar tarefa"
        children={
          <Form
            btnText="Editar"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}

          />
        }
      />
      <Header/>
      <main className="container">
        <div>
          <h2>Adicone sua tarefa</h2>
          <Form btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} deleteTask={deleteTask} editTask={editTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
