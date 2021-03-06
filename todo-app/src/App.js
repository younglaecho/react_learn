import React, {useRef, useState, useCallback, } from 'react';
import produce from 'immer';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <=2500; i++) {
    array.push({
      id: i,
      text: `할 일  ${i}`,
      checked: false
    });
  }
  return array
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
    
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id : nextId.current,
      text : text,
      checked: false
    }
    setTodos(todos => todos.concat(todo));
    nextId.current += 1
  }, []);

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    },
    []
  )
  
  const onToggle = useCallback(
    id => {
      // setTodos(todos => todos.map(todo => (
      //   todo.id === id ? {...todo, checked: !todo.checked} : todo
      // )))
      setTodos(produce(todos, draft => {
        const todo = draft.find(t => t.id === id);
        todo.checked = !todo.checked
      }))
    },
    [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos}/>
    </TodoTemplate>
  )
};

export default App;