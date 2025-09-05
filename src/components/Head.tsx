interface HeadProps {
  text: string;
}

function Head({ text }: HeadProps) {
  return (
    <h1 className="text-center text-3xl font-bold text-gray-700">{text}</h1>
  );
}

export default Head;
