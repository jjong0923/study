import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginMock } from "../mock/auth";
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

interface userObj {
  id: string;
  pw: string;
  idBlur: boolean;
  pwBlur: boolean;
}

function LoginPage() {
  const navigate = useNavigate();
  const setAccount = useAccountStore((state) => state.setAccount);
  // const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState<userObj>({
    id: "",
    pw: "",
    idBlur: false,
    pwBlur: false,
  });
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const goToSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    const res = await loginMock(user.id, user.pw);
    if (res.success) {
      alert("로그인 성공!");
      setAccount(user.id);
      navigate("/");
    } else {
      setIsLogin(true);
    }
  };

  // form onsubmit - button submit
  return (
    <AccountBg>
      <AccountForm>
        <AccountHead text="로그인" />
        <AccountInput
          type="text"
          label="아이디"
          value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          onBlur={() => setUser({ ...user, idBlur: true })}
          placeholder="아이디릅 입력해주세요."
          isEmpty={!user.id}
          isBlur={user.idBlur}
        />
        <AccountInput
          type="password"
          label="비밀번호"
          value={user.pw}
          onChange={(e) => setUser({ ...user, pw: e.target.value })}
          onBlur={() => setUser({ ...user, pwBlur: true })}
          placeholder="비밀번호를 입력해주세요."
          isEmpty={!user.pw}
          isBlur={user.pwBlur}
        />
        {isLogin && (
          <p className="text-red-400">아이디 또는 비밀번호가 틀렸습니다.</p>
        )}
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
