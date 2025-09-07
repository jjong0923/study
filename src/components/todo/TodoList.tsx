import { useTheme } from "../../context/ThemeContext";
import type { TodoItem } from "../../pages/TodoPage";
import Status from "./Status";
// import { Bars3Icon } from "@heroicons/react/24/outline"; // npm install @heroicons/react

interface TodoListProps {
  item: TodoItem;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

function TodoList({ item, onDelete, onUpdate }: TodoListProps) {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${theme === "light" ? "border-gray-200 bg-gray-50" : "border-gray-600 bg-gray-700"} relative flex items-center rounded-lg border px-6 py-4 shadow-sm`}
      >
        <input
          className="h-4 w-4 cursor-pointer"
          type="checkbox"
          checked={item.completed}
          onChange={() => onUpdate(item.id)}
        />
        <div className="ml-4">
          <p
            className={`${theme === "light" ? "text-gray-800" : "text-gray-100"}text-lg font-semibold`}
          >
            {item.title}
          </p>
          <p
            className={`${theme === "light" ? "text-gray-500" : "text-gray-400"}text-sm `}
          >
            {item.createdAt}
          </p>
        </div>
        <div className="mr-4 ml-auto flex items-center gap-2">
          {item.completed ? (
            <Status color="green">완료</Status>
          ) : (
            <Status color="blue">진행 중</Status>
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
