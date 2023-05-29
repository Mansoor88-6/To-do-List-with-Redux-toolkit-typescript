import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTask, deleteTask, completeTask } from '../features/todo op/todo op';

function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleCompleteTask = (index) => {
    dispatch(completeTask(index));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleCreateTask = () => {
    
      dispatch(createTask(newTask));
      setNewTask('');
    
  };

  return (
    <div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleCompleteTask(index)}>Mark as Completed</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleCreateTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoList;
