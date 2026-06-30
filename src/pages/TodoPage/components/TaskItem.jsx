import React, { useCallback, useState } from 'react';
import { Checkbox } from '@/components/Checkbox';
import iconPenSquare from '@/assets/images/icon-pen-square.svg';
import iconTrash from '@/assets/images/icon-trash.svg';

export function TaskItem({ tasks, onCheckboxToggleCompletion, onSuccessChangeTask, onClickDelete }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleToggleCompletion = useCallback((isCheckboxChecked, item) => {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  });

  const handleClickEdit = useCallback(task => {
    setEditingTaskId(prevId => task.id);
  });

  const handleChangeInputValue = useCallback(e => {
    const value = e.currentTarget.value;
    setInputValue(prevValue => value);
  });

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Enter') {
      onSuccessChangeTask(inputValue, editingTaskId);
      setEditingTaskId(prevId => null);
      setInputValue(prevValue => '');
    }
  });

  const handleClickDelete = useCallback(key => {
    onClickDelete(key);
  });

  return (
    <>
      {tasks.map(task => (
        <li key={task.id} className="group">
          <div
            className={`flex items-center gap-3 rounded-md border border-neutral-100 p-4.5 ${task.isCompleted && 'bg-[#F9F9F9] line-through'}`}
          >
            <Checkbox onToggleCompletion={handleToggleCompletion} item={task} />

            {editingTaskId === task.id ? (
              <input
                placeholder="Task name"
                className="flex-1"
                onChange={handleChangeInputValue}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span className="flex-1">{task.name}</span>
            )}

            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100">
              <button className="cursor-pointer" onClick={() => handleClickEdit(task)}>
                <img src={iconPenSquare} alt="Icon edit task" />
              </button>
              <button className="cursor-pointer" onClick={() => handleClickDelete(task)}>
                <img src={iconTrash} alt="Icon delete task" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
