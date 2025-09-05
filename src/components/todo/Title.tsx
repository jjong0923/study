interface TitleProps {
  account: string | null;
}

function Title({ account }: TitleProps) {
  return <h1 className="text-4xl font-bold">📆 {account}'s ToDoList</h1>;
}

export default Title;
