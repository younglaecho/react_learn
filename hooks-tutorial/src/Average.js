import React, { useReducer, useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균 값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b)=> a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, [])
  const onInsert = useCallback(() => {
    if (parseInt(number)||number === '0') {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      setError('')
    } else (
      setError('숫자를 입력하세요')
    )
    inputEl.current.focus();
  }, [number, list]);

  const keyPress = e => {
    if(e.key === 'Enter') {
      onInsert()
    }
  }

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} onKeyPress={keyPress} ref={inputEl}/>
      <button onClick={onInsert} >등록</button>
      <p style={{"color":"red"}}>{error}</p>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;