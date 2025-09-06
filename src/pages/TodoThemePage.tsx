import { ThemeProvider } from "../context/ThemeContext";
import TodoPage from "./TodoPage";

function TodoThemePage() {
  return (
    <ThemeProvider>
      <TodoPage />
    </ThemeProvider>
  );
}

export default TodoThemePage;
