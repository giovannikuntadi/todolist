import { SegmentedControl } from '@/components/SegmentedControl';
import { TaskList } from './TaskList';

export function TodoMain({
  tasks,
  segments,
  selectedSegmentIndex,
  onSelectSegment,
  onCheckboxToggleCompletion,
  onClickEditTask,
  onClickDeleteTask,
}) {
  function handleSelectSegment(index) {
    onSelectSegment(index);
  }

  function handleCheckboxToggleCompletion(isCheckboxChecked, item) {
    onCheckboxToggleCompletion(isCheckboxChecked, item);
  }

  function handleClickEditTask(selectedTask) {
    onClickEditTask(selectedTask);
  }

  function handleClickDeleteTask(selectedTask) {
    onClickDeleteTask(selectedTask);
  }

  return (
    <section className="flex h-106 flex-col p-2">
      <div className="rounded-t-xl border border-neutral-100 bg-white p-3">
        <SegmentedControl
          segments={segments}
          selectedSegmentIndex={selectedSegmentIndex}
          onSelectSegment={handleSelectSegment}
        />
      </div>
      <div
        className={`flex flex-1 flex-col ${tasks.length === 0 ? 'items-center justify-center gap-4.5' : 'scrollbar-none overflow-y-scroll p-3'} rounded-b-xl border-x border-b border-neutral-100 bg-white`}
      >
        <TaskList
          tasks={tasks}
          onCheckboxToggleCompletion={handleCheckboxToggleCompletion}
          onClickEditTask={handleClickEditTask}
          onClickDeleteTask={handleClickDeleteTask}
        />
      </div>
    </section>
  );
}
