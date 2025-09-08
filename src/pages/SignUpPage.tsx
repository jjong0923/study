import { useState } from "react";
// import AccountBg from "../components/account/AccountBg";
// import AccountForm from "../components/account/AccountForm";
// import Head from "../components/account/Head";
// import AccountInput from "../components/account/AccountInput";
// import Button from "../components/account/Button";
import {
  AccountBg,
  AccountForm,
  AccountHead,
  AccountInput,
  AccountButton,
} from "../components/account";

function SignUpPage() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [idBlur, setIdBlur] = useState<boolean>(false);
  const [pwBlur, setPwBlur] = useState<boolean>(false);

  return (
    <AccountBg>
      <AccountForm>
        <AccountHead text="회원가입" />
        <AccountInput
          type="text"
          label="아이디"
          onChange={(e) => setId(e.target.value)}
          onBlur={() => setIdBlur(true)}
          placeholder="아이디릅 입력해주세요."
          isIn={!id}
          isBlur={idBlur}
        />
        <AccountInput
          type="password"
          label="비밀번호"
          onChange={(e) => setPw(e.target.value)}
          onBlur={() => setPwBlur(true)}
          placeholder="비밀번호를 입력해주세요."
          isIn={!pw}
          isBlur={pwBlur}
        />
        <AccountButton text="Sign up" type="button" />
      </AccountForm>
    </AccountBg>
  );
}

export default SignUpPage;
