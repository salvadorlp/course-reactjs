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

  // useCallback is similar to useMemo but here its possible to return a function
  const handleAdd = useCallback(() => {
    setTasks([...tasks, input]);
    setInput('');
  }, [input, tasks]);

  // if any function inside return is called, all functions inside it will be executed too
  // Because of that, we use useMemo ( () => {} , [] ) to not call functions unecessarily
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
