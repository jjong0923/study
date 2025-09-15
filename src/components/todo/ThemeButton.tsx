interface ThemeButtonProps {
  theme: string;
  onClick: () => void;
}

function ThemeButton({ theme, onClick }: ThemeButtonProps) {
  return (
    <button
      className="absolute right-6 bottom-0 mb-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      onClick={onClick}
    >
      {theme === "light" ? "Dark" : "light"}
    </button>
  );
}

export default ThemeButton;
