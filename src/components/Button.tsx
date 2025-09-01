interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className="mt-4 cursor-pointer rounded-md bg-blue-500 px-2 py-2 font-semibold text-white shadow-md hover:bg-blue-600">
      {text}
    </button>
  );
}

export default Button;
