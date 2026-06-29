import { Checkbox } from '@/components/Checkbox';
import iconPenSquare from '@/assets/images/icon-pen-square.svg';
import iconTrash from '@/assets/images/icon-trash.svg';
import React from 'react';

export function TaskItem({ tasks, onCheckboxToggleCompletion, onClickEdit, onClickDelete }) {
  function handleToggleCompletion(isCheckboxChecked, item) {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  }

  function handleClickEdit(task) {
    onClickEdit(task);
  }

  function handleClickDelete(task) {
    onClickDelete(task);
  }

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id} className="group">
          <div
            className={`flex items-center gap-3 rounded-md border border-neutral-100 p-4.5 ${task.isCompleted && 'bg-[#F9F9F9] line-through'}`}
          >
            <Checkbox onToggleCompletion={handleToggleCompletion} item={task} />
            <span className="flex-1">{task.name}</span>
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
