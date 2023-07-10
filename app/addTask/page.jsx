export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task "
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task Description"
      />
      <button className="bg-green-600 text-white py-3 px-6 w-fit">Add Task</button>
    </form>
  );
}
