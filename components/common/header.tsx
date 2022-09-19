import type { NextPage } from 'next'
import Link from 'next/link'

const Header: NextPage = () => {
  return (
    <div className="flex justify-between">
        <div className="inline-flex">
            <div className="mr-7">매물</div>
            <div className="mr-7">시세</div>
            <div className="mr-7">커뮤니티</div>
            <div className="mr-7">이벤트</div>
        </div>
        <div>
            <Link href="/login">로그인</Link>
        </div>
    </div>
  )
}

export default Header
