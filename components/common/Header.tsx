import Link from 'next/link'

const Header = () => {
    return (
      <header className="sticky top-0 z-50 bg-white laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-16 laptop:h-20 shadow-lg justify-center">
          {/* <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
              <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
          </div> */}
          <div className="w-[1280px] flex justify-between">
            <a className="w-[300px] m-5">
                <span className="font-bold text-xl w-auto ">집중</span>
            </a>
            <div className="flex justify-between items-center">
  
              <nav className="hidden laptop:block">
                <ul className="inline-flex">
                    <li className='m-10 w-15 list-none'><Link href="/map">매물</Link></li>
                    <li className='m-10 w-15 list-none'><Link href="/post">매물등록</Link></li>
                  {/*<li className='m-10 w-15 list-none'>커뮤니티</li>*/}
                  {/*<li className='m-10 w-15 list-none'>이벤트</li>*/}
                    <li className='m-10 w-15 list-none'><Link href="/login">로그인</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          
          
      </header>
    )
  }
  
  export default Header
  