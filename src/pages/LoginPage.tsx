import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAccountStore from "../store/useAccountStore";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../store/store";
// import { setAccount } from "../store/accountSlice";
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

function LoginPage() {
  const navigate = useNavigate();
  const setAccount = useAccountStore((state) => state.setAccount);
  // const dispatch = useDispatch<AppDispatch>();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [idBlur, setIdBlur] = useState<boolean>(false);
  const [pwBlur, setPwBlur] = useState<boolean>(false);
  // const [isLogin, setIsLogin] = useState<boolean>(false);

  const goToSignup = () => {
    navigate("/signup");
  };

  //  const handleLogin = async () => {
  //   const res = await loginMock(id, pw);
  //   if (res.success) {
  //     alert(`환영합니다, ${res.user.name}님!`);
  //     setError("");
  //   } else {
  //     setError(res.message);
  //   }
  // };
  const handleLogin = () => {
    setAccount(id);
    // dispatch(setAccount(id));
    navigate("/");
  };

  return (
    <AccountBg>
      <AccountForm>
        <AccountHead text="로그인" />
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
        <AccountButton text="Login" onClick={handleLogin} type="button" />
        <p className="mt-1">
          계정이 없으신가요?{" "}
          <span className="cursor-pointer text-blue-400" onClick={goToSignup}>
            sign up
          </span>
        </p>
      </AccountForm>
    </AccountBg>
  );
}

export default LoginPage;
