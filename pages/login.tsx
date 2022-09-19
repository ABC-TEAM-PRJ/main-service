import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <div className="text-center justify-self-center">
      <div className="mt-8">집중</div>
      <div className="bg-main-color rounded-md w-[64px] h-9 flex">아이디</div>
      <div>비밀번호</div>
      <div>로그인</div>
      <div>네이버로 로그인</div>
      <div>카카오로 로그인</div>
    </div>
  )
}

export default Login
