import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import {useCallback, useRef, useState} from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '컴퓨터 구조 공부하기',
      checked: false
    },
    {
      id: 2,
      text: '리액트 공부하기',
      checked: false
    },
    {
      id: 3,
      text: '토익 공부하기',
      checked: false
    }
  ])

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const nextTodos = todos.concat(
      {
        id: nextId.current,
        text,
        checked: false
      }
    )
    setTodos(nextTodos);
    nextId.current = nextId.current + 1
  }, [todos])
  
  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => (todo.id !== id)))
  },[todos])

  const onToggle = useCallback((id)=> {
    setTodos(todos.map(todo => (todo.id === id ? {...todo , checked: !todo.checked}: todo)))
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
