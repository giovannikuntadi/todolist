function Segment() {
  return <button></button>;
}

export function SegmentedControl() {
  return (
    <div className="flex w-60 rounded-md bg-neutral-50 p-0.5">
      <button className="flex-1 cursor-pointer rounded-[6px] bg-white px-3.5 py-1.25 text-neutral-900">All</button>
      <button className="flex-1 cursor-pointer rounded-[6px] px-3.5 py-1.25 text-[#a4a4a4]">Active</button>
      <button className="flex-1 cursor-pointer rounded-[6px] px-3.5 py-1.25 text-[#a4a4a4]">Completed</button>
    </div>
  );
}
