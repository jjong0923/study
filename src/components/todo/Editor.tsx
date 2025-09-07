import { useTheme } from "../../context/ThemeContext";

interface EditorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
function Editor({ value, onChange, onClick }: EditorProps) {
  const { theme } = useTheme();

  return (
    <div className="flex w-full gap-2 border-b-2 border-gray-200 pb-4">
      <input
        className={`${theme === "light" ? "bg-white text-black placeholder-gray-400" : "bg-gray-700 text-white placeholder-gray-300"} flex-1 rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
        value={value}
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClick();
        }}
      />
      <button
        className="cursor-pointer rounded-lg bg-blue-500 px-6 py-2 text-xl text-white hover:bg-blue-600"
        onClick={onClick}
      >
        추가
      </button>
    </div>
  );
}

export default Editor;
