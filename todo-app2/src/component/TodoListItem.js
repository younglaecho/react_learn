import React from 'react';
import './TodoListItem.scss'
import {GrCheckbox, GrCheckboxSelected} from 'react-icons/gr'
import {MdRemoveCircleOutline} from 'react-icons/md'
import cn from 'classname'

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo;

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", {checked})} onClick={()=> onToggle(id)}>
        {checked? <GrCheckboxSelected /> : <GrCheckbox /> }
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={()=> onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;