import { useRef, useState } from "react";
// import useAccountStore from "../store/useAccountStore";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useTheme } from "../context/ThemeContext";
import Editor from "../components/todo/Editor";
import Title from "../components/todo/Title";
import TodoList from "../components/todo/TodoList";

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

const todoMockData: TodoItem[] = [
  {
    id: 1,
    title: "React 공부하기",
    completed: false,
    createdAt: "2025-08-30",
  },
  {
    id: 2,
    title: "Tailwind CSS 프로젝트 적용",
    completed: true,
    createdAt: "2025-08-29",
  },
  {
    id: 3,
    title: "TodoList 컴포넌트 구조 설계",
    completed: false,
    createdAt: "2025-08-30",
  },
  {
    id: 4,
    title: "모바일 반응형 레이아웃 테스트",
    completed: true,
    createdAt: "2025-08-28",
  },
  {
    id: 5,
    title: "목 데이터로 렌더링 확인",
    completed: false,
    createdAt: "2025-08-29",
  },
];

function TodoPage() {
  // const account = useAccountStore((state) => state.account);
  const account = useSelector((state: RootState) => state.account.account);
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<TodoItem[]>(todoMockData);
  const { theme, toggleTheme } = useTheme();

  const idRef = useRef<number>(list.length + 1);

  const addList = () => {
    if (todo.trim() === "") return;
    const newTodo: TodoItem = {
      id: idRef.current++,
      title: todo,
      completed: false,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setList([newTodo, ...list]);
    setTodo(""); // 입력 필드 초기화
  };

  const deleteList = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const updateList = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
          : "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
      } flex h-screen w-full flex-col items-center pt-12 pb-12`}
    >
      <button
        className="absolute right-6 mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={toggleTheme}
      >
        choose Theme
      </button>
      <Title account={account} />
      <div className="no-scrollbar mt-10 flex w-[40%] min-w-[350px] flex-col justify-between gap-8 overflow-y-scroll rounded-xl bg-white p-4 shadow-lg">
        <Editor
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onClick={addList}
        />
        {list.map((item) => (
          <TodoList
            key={item.id}
            item={item}
            onDelete={deleteList}
            onUpdate={updateList}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
