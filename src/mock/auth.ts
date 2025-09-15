// src/mocks/auth.ts
export interface User {
  id: string;
  password: string;
}

export const mockUsers: User[] = [
  { id: "user1", password: "1234" },
  { id: "user2", password: "abcd" },
  { id: "test", password: "test" },
  { id: "johndoe", password: "pass1234" },
  { id: "janedoe", password: "qwerty" },
  { id: "lee_sun", password: "sun2023" },
  { id: "park_hyun", password: "hyun!@#" },
  { id: "choi_min", password: "min987" },
  { id: "kim_jiwoo", password: "jiwoo000" },
  { id: "seo_hyun", password: "sh!2025" },
  { id: "test_user1", password: "password1" },
  { id: "test_user2", password: "password2" },
  { id: "kangneng", password: "knu2025" },
  { id: "kang", password: "knu2025" },
];

/**
 * 로그인 함수 (목 API)
 * @param id 사용자 아이디
 * @param pw 비밀번호
 * @returns 성공: { success: true, user }, 실패: { success: false, message }
 */
export const loginMock = async (id: string, pw: string) => {
  // 모의 API 지연 (500ms)
  await new Promise((res) => setTimeout(res, 500));

  const user = mockUsers.find((u) => u.id === id && u.password === pw);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: "아이디 또는 비밀번호가 다릅니다." };
  }
};
