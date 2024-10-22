import { React, useState } from 'react';
import Input from './components/input';

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
      <h1>Quadro de Tarefas</h1>
        <Input taskList={taskList} setTaskList={setTaskList}/>

      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </div>
  )
}

export default App;