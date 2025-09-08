interface AccountButtonProps {
  text: string;
  onClick: () => void;
  type: "button";
}

function AccountButton({ text, onClick, type }: AccountButtonProps) {
  return (
    <button
      className="mt-4 cursor-pointer rounded-md bg-blue-500 px-2 py-2 font-semibold text-white shadow-md hover:bg-blue-600"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default AccountButton;
