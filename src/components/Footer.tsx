function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-8 text-black/70">
      <div className="flex items-start justify-center gap-12 text-sm leading-relaxed">
        <div>
          <h4 className="text-lg font-bold">Your Company Name</h4>
          <p>©2025 Your Company Name. All Rights Reserved.</p>
          <p>주소: 서울특별시 강남구 테헤란로 123</p>
          <p>이메일: contact@yourcompany.com</p>
        </div>
        <div className="ml-8 flex flex-col justify-center">
          <h5 className="text-base font-semibold">링크</h5>
          <ul>
            <li>
              <a href="#">회사 소개</a>
            </li>
            <li>
              <a href="#">서비스</a>
            </li>
            <li>
              <a href="#">블로그</a>
            </li>
            <li>
              <a href="#">문의하기</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h5 className="text-base font-semibold">법률</h5>
          <ul>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h5 className="text-base font-semibold">소셜</h5>
          <ul>
            <li>
              <a href="#">페이스북</a>
            </li>
            <li>
              <a href="#">인스타그램</a>
            </li>
            <li>
              <a href="#">트위터</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
