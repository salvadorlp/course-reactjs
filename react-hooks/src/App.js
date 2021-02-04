import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // useEffect ( () => { function body }, [ wanted state ] )
  useEffect( () => { // similar to componentDidMount
    const storedTasks = localStorage.getItem('tasks');

    if(storedTasks){
      setTasks(JSON.parse(storedTasks));
    }

  }, [/**nothing has been defined */]);

  useEffect( () => { // when [tasks] changes, the function will be called
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks] );

  const handleAdd = useCallback(() => {
    setTasks([...tasks, input]);
    setInput('');
  }, [input, tasks]);

  // useMemo ( () => {} , [] )
  const tasksCount = useMemo( () => tasks.length, [tasks] );

  return (
    <div>
      <h1>Todo List with React Hooks</h1><hr/>
      <ul>
        {tasks.map( (item) => <li>{item}</li> )}
      </ul>
      <strong>You have {tasksCount} tasks!</strong><br/><br/>
      <input type="text" placeholder="New Task ?" value={input} onChange={ e => setInput(e.target.value) }></input>
      <button type="button" onClick={ () => handleAdd(input)}>Add +</button>
    </div>
  );
}

export default App;
