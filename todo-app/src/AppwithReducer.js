import React, {useRef, useState, useCallback, useReducer } from 'react';
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

function todoReducer (todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked : !todo.checked}: todo);
    default:
      return todos;
  }
}
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // 원래 useReducer의 두번째 매개변수에 초기 state가 들어가는게 맞지만, 리렌더링 할 때마다 함수를 실행하게 되는 문제가 있다.
  // 위와 같은 방법으로 세번째에 함수를 참조하면 초기 렌더링 시에만 함수가 실행되게 할 수 있다.
    
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked:false
    };
    dispatch({type:'INSERT', todo});
    nextId.current +=1;
  }, []);
  
  const onRemove = useCallback(id => {
    dispatch({type:'REMOVE', id})
  }, [])
  
  const onToggle = useCallback(id => {
    dispatch({type:'TOGGLE', id})
  }, [])
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos}/>
    </TodoTemplate>
  )
};

export default App;