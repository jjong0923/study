interface AccountHeadProps {
  text: string;
}

function AccountHead({ text }: AccountHeadProps) {
  return (
    <h1 className="text-center text-3xl font-bold text-gray-700">{text}</h1>
  );
}

export default AccountHead;
