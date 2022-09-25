import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <>
    <div>
      <div className="text-center justify-self-center w-100px">
        <div className="mt-48 mb-10 text-xl font-bold">집중</div>
        <input type="text" value="아이디" className="border-none mt-1 mb-3 px-3 py-2 bg-gray-100 rounded-md sm:text-sm w-96 h-12 text-lg text-gray-400
      "/>
        <input type="text" value="비밀번호" className="border-none mt-1 mb-6 px-3 py-2 rounded-md sm:text-sm w-96 h-12 text-lg text-gray-400
        "/>

        <button className="rounded-full font-bold text-lg mb-2 align-middle border-none bg-main-color text-white text-slate-50 color w-96 h-12 justify-center items-stretch hover:bg-green-600">로그인</button>
        <button className="rounded-full font-bold text-lg mb-2 border-2 border-main-color bg-white border-main-color-500 w-96 h-12 text-main-color justify-center items-stretch">네이버로 로그인</button>
        <button className="rounded-full font-bold text-lg border-2 border-amber-400 text-amber-400 bg-white w-96 h-12 justify-center items-stretch">카카오로 로그인</button>
      </div>
      </div>
    </>
  )
}

export default Login