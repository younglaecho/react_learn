import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer'

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    name: '',
    username:''
  })
  const [data, setData] = useState({
    array: [],
    uselessVlaue: null
  })

  const onChange = useCallback(e => {
    const {name, value} = e.target
    setForm(produce(draft => {
      draft[name]=value;
    }));
  },
  []
  )

  const onSubmit = useCallback(e => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username : form.username
    }
    setData(produce(draft =>{
      draft.array.push(info);
    }));

    setForm({
      name: '',
      username: ''
    })
    nextId.current += 1

  }, [form.name, form.username],)


  const onRemove = useCallback(id => {
    setData(produce(data, draft=>{
      draft.array[id-1].name='TLqkf';
    }))
  }, [data]) 
  return (
    <form onSubmit={onSubmit}>
      name
      <input type="text" name="name" onChange={onChange} value={form.name}/>
      username
      <input type="text" name="username" onChange={onChange} value={form.username}/>
      <button type="submit">눌려!!</button>
      <ul>
        {data.array.map(info => {
          return <li key={info.id} onClick={() => onRemove(info.id)}>{info.username} ({info.name})</li>
        })}
      </ul>
    </form>
  );
};

export default App;
