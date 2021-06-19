import React, {useCallback, useRef, useState} from 'react';
import './TodoInsert.scss'
import {BsFillPlusSquareFill} from 'react-icons/bs';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('')
  const inputEl = useRef(null)
  
  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, []);

  const onSubmit = (e) => {
    if (value) {
      onInsert(value);
    }
    setValue('')
    inputEl.current.focus()
    e.preventDefault()
  }

  return (
    <form className="TodoInsert" onSubmit= {onSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="할 일을 입력하세요." ref={inputEl} />
      <button>
        <BsFillPlusSquareFill />
      </button>
    </form>
  );
};

export default TodoInsert;