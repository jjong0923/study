import type { TodoItem } from "../../pages/TodoPage";
// import { Bars3Icon } from "@heroicons/react/24/outline"; // npm install @heroicons/react

interface TodoListProps {
  item: TodoItem;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

function TodoList({ item, onDelete, onUpdate }: TodoListProps) {
  return (
    <>
      <div className="relative flex items-center rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 shadow-sm">
        <input
          className="h-4 w-4 cursor-pointer"
          type="checkbox"
          checked={item.completed}
          onClick={() => onUpdate(item.id)}
        />
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-500">{item.createdAt}</p>
        </div>
        <div className="mr-4 ml-auto flex items-center gap-2">
          {item.completed ? (
            <div className="flex min-h-7 min-w-20 items-center justify-center rounded-full bg-green-500 px-4 py-1 text-sm font-medium text-white shadow-md">
              완료
            </div>
          ) : (
            <div className="ml-5 flex min-h-7 min-w-20 items-center justify-center rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white shadow-md">
              진행 중
            </div>
          )}
        </div>
        <div
          className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
          onClick={() => onDelete(item.id)}
        >
          ✖️
        </div>
      </div>
    </>
  );
}

export default TodoList;
