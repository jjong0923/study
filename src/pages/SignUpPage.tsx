import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Head from "../components/Head";

function SignUpPage() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [idBlur, setIdBlur] = useState<boolean>(false);
  const [pwBlur, setPwBlur] = useState<boolean>(false);
  return (
    <form className="flex h-lvh flex-col items-center justify-start bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pt-30">
      <div className="flex w-[50vh] flex-col rounded-xl bg-white p-8 shadow-lg">
        <Head text="회원가입" />
        <Input
          type="text"
          label="아이디"
          onChange={(e) => setId(e.target.value)}
          onBlur={() => setIdBlur(true)}
          placeholder="아이디릅 입력해주세요."
          isIn={!id}
          isBlur={idBlur}
        />
        <Input
          type="password"
          label="비밀번호"
          onChange={(e) => setPw(e.target.value)}
          onBlur={() => setPwBlur(true)}
          placeholder="비밀번호를 입력해주세요."
          isIn={!pw}
          isBlur={pwBlur}
        />
        <Button text="Sign up" />
      </div>
    </form>
  );
}

export default SignUpPage;
